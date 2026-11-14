
document.addEventListener("DOMContentLoaded", function () {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    const languageSelect = document.getElementById("speechLanguage");
    const startButton = document.getElementById("startSpeech");
    const stopButton = document.getElementById("stopSpeech");
    const clearButton = document.getElementById("clearSpeech");
    const copyButton = document.getElementById("copySpeech");
    const status = document.getElementById("speechStatus");
    const output = document.getElementById("speechOutput");

    if (
        !languageSelect ||
        !startButton ||
        !stopButton ||
        !clearButton ||
        !copyButton ||
        !status ||
        !output
    ) {
        console.error("Speech-to-Text HTML elements were not found.");
        return;
    }

    if (!SpeechRecognition) {
        status.textContent =
            "Speech recognition is not supported in this browser. Please use Chrome.";
        startButton.disabled = true;
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let finalTranscript = "";
    let isListening = false;

    // Start speech recognition
    startButton.addEventListener("click", function () {
        if (isListening) return;

        recognition.lang = languageSelect.value;
        isListening = true;

        status.textContent = "Starting microphone...";
        startButton.disabled = true;
        stopButton.disabled = false;

        try {
            recognition.start();
        } catch (error) {
            isListening = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            status.textContent = "Could not start. Please try again.";
            console.error(error);
        }
    });

    // Display recognised words while speaking
    recognition.onresult = function (event) {
        let interimTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            const transcript = result[0].transcript.trim();

            if (result.isFinal) {
                if (transcript) {
                    finalTranscript +=
                        (finalTranscript ? " " : "") + transcript;
                }
            } else {
                interimTranscript +=
                    (interimTranscript ? " " : "") + transcript;
            }
        }

        // Show both confirmed and temporary words
        output.value = [finalTranscript, interimTranscript]
            .filter(Boolean)
            .join(" ");

        if (interimTranscript) {
            status.textContent = "Listening: " + interimTranscript;
        } else {
            status.textContent = "Speech recognised.";
        }

        // Keep the latest text visible
        output.scrollTop = output.scrollHeight;
    };

    // Handle recognition errors
    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);

        if (event.error === "not-allowed") {
            status.textContent =
                "Microphone permission denied. Please allow microphone access.";
        } else if (event.error === "no-speech") {
            status.textContent = "No speech detected. Please try speaking again.";
        } else if (event.error === "network") {
            status.textContent =
                "Network error. Check your internet connection.";
        } else {
            status.textContent = "Recognition error: " + event.error;
        }
    };

    // Handle recognition stopping
    recognition.onend = function () {
        isListening = false;
        startButton.disabled = false;
        stopButton.disabled = true;

        if (status.textContent.startsWith("Listening:")) {
            status.textContent = "Recognition stopped.";
        } else if (status.textContent === "Starting microphone...") {
            status.textContent = "Recognition ended. Please try again.";
        }
    };

    // Stop speech recognition
    stopButton.addEventListener("click", function () {
        if (isListening) {
            recognition.stop();
            status.textContent = "Stopping recognition...";
        }
    });

    // Clear recognised text
    clearButton.addEventListener("click", function () {
        finalTranscript = "";
        output.value = "";
        status.textContent = "Text cleared.";
    });

    // Copy recognised text
    copyButton.addEventListener("click", async function () {
        if (!output.value.trim()) {
            status.textContent = "There is no text to copy.";
            return;
        }

        try {
            await navigator.clipboard.writeText(output.value);
            status.textContent = "Text copied successfully.";
        } catch (error) {
            output.select();
            document.execCommand("copy");
            status.textContent = "Text copied.";
        }
    });
});
