
/* =====================================
   TEXT TO SPEECH MODULE
   AI Assistive Communication System
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const language = document.getElementById("ttsLanguage");
    const input = document.getElementById("ttsInput");

    const speakButton = document.getElementById("speakText");
    const pauseButton = document.getElementById("pauseSpeech");
    const resumeButton = document.getElementById("resumeSpeech");
    const stopButton = document.getElementById("stopSpeechOutput");
    const clearButton = document.getElementById("clearTTS");

    const status = document.getElementById("ttsStatus");

    if (
        !language || !input || !speakButton ||
        !pauseButton || !resumeButton ||
        !stopButton || !clearButton || !status
    ) {
        console.error("Text-to-Speech elements are missing.");
        return;
    }

    if (!("speechSynthesis" in window)) {
        status.textContent =
            "Text-to-Speech is not supported in this browser.";
        speakButton.disabled = true;
        return;
    }

    const synth = window.speechSynthesis;

    let currentUtterance = null;

    // Speak entered text
    speakButton.addEventListener("click", function () {

        const text = input.value.trim();

        if (!text) {
            status.textContent = "Please enter some text first.";
            return;
        }

        synth.cancel();

        currentUtterance = new SpeechSynthesisUtterance(text);

        currentUtterance.lang = language.value;
        currentUtterance.rate = 0.9;
        currentUtterance.pitch = 1;

        currentUtterance.onstart = function () {
            status.textContent = "Speaking...";
        };

        currentUtterance.onend = function () {
            status.textContent = "Finished speaking.";
        };

        currentUtterance.onerror = function (event) {
            status.textContent = "Speech error: " + event.error;
        };

        synth.speak(currentUtterance);
    });

    // Pause speech
    pauseButton.addEventListener("click", function () {

        if (synth.speaking && !synth.paused) {
            synth.pause();
            status.textContent = "Speech paused.";
        }
    });

    // Resume speech
    resumeButton.addEventListener("click", function () {

        if (synth.paused) {
            synth.resume();
            status.textContent = "Speech resumed.";
        }
    });

    // Stop speech
    stopButton.addEventListener("click", function () {

        synth.cancel();
        currentUtterance = null;
        status.textContent = "Speech stopped.";
    });

    // Clear text
    clearButton.addEventListener("click", function () {

        synth.cancel();
        currentUtterance = null;
        input.value = "";
        status.textContent = "Text cleared.";
    });

});
