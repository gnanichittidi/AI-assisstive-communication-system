
/* ==========================================
   SMART IMAGE READER
   OCR + TEXT TO SPEECH
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const upload = document.getElementById("imageUpload");
    const preview = document.getElementById("imagePreview");
    const language = document.getElementById("imageLanguage");

    const extractButton = document.getElementById("extractImageText");
    const readButton = document.getElementById("readImageText");
    const stopButton = document.getElementById("stopImageSpeech");
    const copyButton = document.getElementById("copyImageText");
    const clearButton = document.getElementById("clearImage");

    const output = document.getElementById("extractedText");
    const status = document.getElementById("imageStatus");

    let selectedFile = null;
    let previewURL = null;
    let worker = null;
    let processing = false;

    // Check HTML elements
    if (
        !upload || !preview || !language ||
        !extractButton || !readButton ||
        !stopButton || !copyButton ||
        !clearButton || !output || !status
    ) {
        console.error("Image Reader: HTML elements missing.");
        return;
    }

    // Check OCR library
    if (!window.Tesseract) {
        status.textContent =
            "OCR library not loaded. Check your internet connection.";
        extractButton.disabled = true;
        console.error("Tesseract is not available.");
        return;
    }

    // Image upload
    upload.addEventListener("change", function () {

        const file = upload.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            status.textContent = "Please select a valid image.";
            return;
        }

        if (previewURL) {
            URL.revokeObjectURL(previewURL);
        }

        selectedFile = file;
        previewURL = URL.createObjectURL(file);

        preview.src = previewURL;
        preview.hidden = false;

        output.value = "";

        status.textContent =
            "Image uploaded successfully. Ready to extract text.";
    });

    // Extract image text
    extractButton.addEventListener("click", async function () {
        console.log("EXTRACT BUTTON CLICKED");
console.log("Selected image:", selectedFile);
console.log("Tesseract:", typeof Tesseract);

        if (processing) return;

        if (!selectedFile) {
            status.textContent = "Please upload an image first.";
            return;
        }

        processing = true;
        extractButton.disabled = true;
        output.value = "";

        try {

            const selectedLanguage = language.value;

            status.textContent = "Starting OCR engine...";

            // Create OCR worker
            worker = await Tesseract.createWorker(
                selectedLanguage,
                1,
                {
                    logger: function (message) {

                        if (message.status === "loading tesseract core") {
                            status.textContent = "Loading OCR engine...";
                        }

                        else if (message.status === "loading language traineddata") {
                            status.textContent = "Downloading language data...";
                        }

                        else if (message.status === "recognizing text") {

                            const progress = Math.round(
                                (message.progress || 0) * 100
                            );

                            status.textContent =
                                "Extracting text: " + progress + "%";
                        }
                    }
                }
            );

            status.textContent = "Reading your image...";

            // Recognise uploaded image
            const result = await worker.recognize(selectedFile);

            const extractedText = result.data.text.trim();

            if (extractedText.length > 0) {

                output.value = extractedText;

                status.textContent =
                    "Success! Text extracted from your image.";

            } else {

                status.textContent =
                    "No text detected. Try a clearer image.";
            }

        } catch (error) {

            console.error("OCR Error:", error);

            status.textContent =
                "OCR failed: " + error.message;

        } finally {

            if (worker) {

                try {
                    await worker.terminate();
                } catch (error) {
                    console.error("Worker cleanup error:", error);
                }

                worker = null;
            }

            processing = false;
            extractButton.disabled = false;
        }

    });

    // Read extracted text aloud
    readButton.addEventListener("click", function () {

        const text = output.value.trim();

        if (!text) {
            status.textContent = "No text available to read.";
            return;
        }

        if (!window.speechSynthesis) {
            status.textContent = "Speech output is not supported.";
            return;
        }

        window.speechSynthesis.cancel();

        const speech = new SpeechSynthesisUtterance(text);

        const speechLanguages = {
            eng: "en-US",
            tel: "te-IN",
            hin: "hi-IN",
            kan: "kn-IN"
        };

        speech.lang = speechLanguages[language.value];
        speech.rate = 0.9;

        speech.onstart = function () {
            status.textContent = "Reading text aloud...";
        };

        speech.onend = function () {
            status.textContent = "Finished reading.";
        };

        speech.onerror = function (event) {
            status.textContent = "Speech error: " + event.error;
        };

        window.speechSynthesis.speak(speech);

    });

    // Stop reading
    stopButton.addEventListener("click", function () {

        window.speechSynthesis.cancel();
        status.textContent = "Reading stopped.";

    });

    // Copy extracted text
    copyButton.addEventListener("click", async function () {

        if (!output.value.trim()) {
            status.textContent = "No text to copy.";
            return;
        }

        try {

            await navigator.clipboard.writeText(output.value);

            status.textContent = "Text copied successfully.";

        } catch (error) {

            output.select();

            status.textContent =
                "Select the text and press Ctrl+C to copy.";
        }

    });

    // Clear everything
    clearButton.addEventListener("click", function () {

        window.speechSynthesis.cancel();

        selectedFile = null;
        upload.value = "";
        output.value = "";

        preview.removeAttribute("src");
        preview.hidden = true;

        if (previewURL) {
            URL.revokeObjectURL(previewURL);
            previewURL = null;
        }

        status.textContent = "Image and text cleared.";

    });

    console.log("Smart Image Reader initialized.");

});
