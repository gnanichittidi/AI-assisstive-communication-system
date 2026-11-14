
// ==========================================
// MULTILINGUAL VOICE ASSISTANT
// AI Assistive Communication System
// ==========================================

const startButton = document.getElementById("startAssistant");
const stopButton = document.getElementById("stopAssistant");
const statusText = document.getElementById("assistantStatus");
const languageMenu = document.getElementById("language");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let recognition;
let assistantActive = false;
let awaitingCommand = false;
let restarting = false;

const languages = {
    "en-US": {
        wake: ["hello assistant"],
        prompt: "Hello! I am listening. Please tell me what you want.",
        ready: "Voice assistant activated. Say Hello Assistant.",
        help: "You can say open English, open speech to text, open image reader, read this page, make text bigger, or stop speaking.",
        unknown: "Sorry, I did not understand. Please try again.",
        stopped: "Assistant stopped."
    },
    "te-IN": {
        wake: ["హలో అసిస్టెంట్"],
        prompt: "చెప్పండి. మీకు ఏమి కావాలో చెప్పండి.",
        ready: "వాయిస్ అసిస్టెంట్ ప్రారంభమైంది.",
        help: "భాష మార్చండి, పేజీ చదవండి, లేదా ఇమేజ్ రీడర్ తెరవండి అని చెప్పండి.",
        unknown: "క్షమించండి. మళ్లీ ప్రయత్నించండి.",
        stopped: "అసిస్టెంట్ ఆపబడింది."
    },
    "hi-IN": {
        wake: ["हेलो असिस्टेंट"],
        prompt: "जी बताइए। आप क्या करना चाहते हैं?",
        ready: "वॉइस असिस्टेंट शुरू हो गया है।",
        help: "भाषा बदलें, पेज पढ़ें, या इमेज रीडर खोलें कहें।",
        unknown: "माफ कीजिए, मैं समझ नहीं पाया।",
        stopped: "असिस्टेंट बंद हो गया है।"
    },
    "kn-IN": {
        wake: ["ಹಲೋ ಅಸಿಸ್ಟೆಂಟ್"],
        prompt: "ಹೇಳಿ. ನಿಮಗೆ ಏನು ಬೇಕು?",
        ready: "ಧ್ವನಿ ಸಹಾಯಕ ಪ್ರಾರಂಭವಾಗಿದೆ.",
        help: "ಭಾಷೆ ಬದಲಿಸಿ, ಪುಟ ಓದಿ ಅಥವಾ ಚಿತ್ರ ಓದುಗ ತೆರೆಯಿರಿ ಎಂದು ಹೇಳಿ.",
        unknown: "ಕ್ಷಮಿಸಿ, ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ.",
        stopped: "ಸಹಾಯಕ ನಿಲ್ಲಿಸಲಾಗಿದೆ."
    }
};

// Get currently selected language
function getLanguage() {
    return languageMenu.value || "en-US";
}

// Speak a response
function assistantSpeak(message) {

    if (!("speechSynthesis" in window)) {
        statusText.textContent = message;
        return;
    }

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = getLanguage();
    speech.rate = 0.9;

    speech.onend = () => {
        if (assistantActive && recognition && !restarting) {
            restarting = true;

            setTimeout(() => {
                restarting = false;
                try {
                    recognition.start();
                } catch (error) {
                    // Recognition may already be active.
                }
            }, 400);
        }
    };

    window.speechSynthesis.speak(speech);
    statusText.textContent = message;
}

// Create speech recognition
function setupRecognition() {

    if (!SpeechRecognition) {
        statusText.textContent =
            "Speech recognition is not supported in this browser. Try Chrome.";

        return false;
    }

    recognition = new SpeechRecognition();

    recognition.lang = getLanguage();
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {

        const result =
            event.results[event.results.length - 1];

        const spokenText =
            result[0].transcript.trim().toLowerCase();

        statusText.textContent = "Heard: " + spokenText;

        handleVoiceCommand(spokenText);
    };

    recognition.onerror = (event) => {

        statusText.textContent =
            "Microphone issue: " + event.error;

        if (event.error === "not-allowed" ||
            event.error === "service-not-allowed") {

            assistantActive = false;
            updateButtons();
        }
    };

    recognition.onend = () => {

        if (assistantActive &&
            !restarting &&
            window.speechSynthesis.speaking === false) {

            try {
                recognition.start();
            } catch (error) {
                // Recognition is already running.
            }
        }
    };

    return true;
}

// Update interface buttons
function updateButtons() {

    startButton.disabled = assistantActive;
    stopButton.disabled = !assistantActive;
}

// Language and command words
const commandWords = {
    "en-US": {
        english: ["english"],
        telugu: ["telugu"],
        hindi: ["hindi"],
        kannada: ["kannada"],
        speech: ["speech to text", "speech"],
        text: ["text to speech"],
        image: ["image reader", "read image"],
        quick: ["quick communication", "communication board"],
        read: ["read this page", "read page"],
        bigger: ["make text bigger", "increase font"],
        stop: ["stop speaking", "stop assistant"],
        home: ["go back to home", "go home"],
        help: ["help", "what can i say"]
    },

    "te-IN": {
        english: ["ఇంగ్లీష్", "ఆంగ్లం"],
        telugu: ["తెలుగు"],
        hindi: ["హిందీ"],
        kannada: ["కన్నడ"],
        speech: ["మాటలను వచనంగా"],
        text: ["వచనాన్ని మాటలుగా"],
        image: ["చిత్రం చదవండి", "ఇమేజ్ రీడర్"],
        quick: ["త్వరిత కమ్యూనికేషన్"],
        read: ["పేజీ చదవండి"],
        bigger: ["అక్షరాలు పెద్దగా చేయండి"],
        stop: ["ఆపండి"],
        home: ["హోమ్‌కు వెళ్లండి"],
        help: ["సహాయం"]
    },

    "hi-IN": {
        english: ["अंग्रेज़ी", "इंग्लिश"],
        telugu: ["तेलुगु"],
        hindi: ["हिंदी"],
        kannada: ["कन्नड़"],
        speech: ["स्पीच टू टेक्स्ट"],
        text: ["टेक्स्ट टू स्पीच"],
        image: ["इमेज रीडर", "चित्र पढ़ें"],
        quick: ["क्विक कम्युनिकेशन"],
        read: ["पेज पढ़ें"],
        bigger: ["अक्षर बड़े करें"],
        stop: ["बंद करें", "रोकें"],
        home: ["होम पर जाएं"],
        help: ["मदद"]
    },

    "kn-IN": {
        english: ["ಇಂಗ್ಲಿಷ್"],
        telugu: ["ತೆಲುಗು"],
        hindi: ["ಹಿಂದಿ"],
        kannada: ["ಕನ್ನಡ"],
        speech: ["ಸ್ಪೀಚ್ ಟು ಟೆಕ್ಸ್ಟ್"],
        text: ["ಟೆಕ್ಸ್ಟ್ ಟು ಸ್ಪೀಚ್"],
        image: ["ಚಿತ್ರ ಓದುಗ", "ಚಿತ್ರ ಓದಿ"],
        quick: ["ತ್ವರಿತ ಸಂವಹನ"],
        read: ["ಪುಟ ಓದಿ"],
        bigger: ["ಅಕ್ಷರ ದೊಡ್ಡದಾಗಿ ಮಾಡಿ"],
        stop: ["ನಿಲ್ಲಿಸಿ"],
        home: ["ಮನೆಗೆ ಹೋಗಿ"],
        help: ["ಸಹಾಯ"]
    }
};

// Find a matching command
function findCommand(text, words) {

    for (const [command, phrases] of Object.entries(words)) {

        if (phrases.some(phrase => text.includes(phrase))) {
            return command;
        }
    }

    return null;
}

// Change website language
function selectLanguage(language) {

    languageMenu.value = language;

    languageMenu.dispatchEvent(
        new Event("change")
    );

    if (assistantActive) {
        recognition.lang = language;
    }

    const messages = {
        "en-US": "English selected.",
        "te-IN": "తెలుగు ఎంపిక చేయబడింది.",
        "hi-IN": "हिंदी चुनी गई है।",
        "kn-IN": "ಕನ್ನಡ ಆಯ್ಕೆ ಮಾಡಲಾಗಿದೆ."
    };

    assistantSpeak(messages[language]);
}

// Perform voice commands
function executeCommand(command) {

    const messages = languages[getLanguage()] || languages["en-US"];

    switch (command) {

        case "english":
            selectLanguage("en-US");
            break;

        case "telugu":
            selectLanguage("te-IN");
            break;

        case "hindi":
            selectLanguage("hi-IN");
            break;

        case "kannada":
            selectLanguage("kn-IN");
            break;

        case "speech":
        case "text":
        case "image":
        case "quick": {

            const cards = {
                speech: "[data-feature='speech']",
                text: "[data-feature='text']",
                image: "[data-feature='image']",
                quick: "[data-feature='quick']"
            };

            const card = document.querySelector(cards[command]);

            if (card) {
                card.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                assistantSpeak("Opening " + command + " feature.");
            } else {
                assistantSpeak("This feature is not available yet.");
            }

            break;
        }

        case "read": {

            const content = document.querySelector("main");

            if (content) {
                const text = content.innerText.slice(0, 3000);
                assistantSpeak(text);
            }

            break;
        }

        case "bigger":
            document.body.classList.add("large-text-mode");
            assistantSpeak("Text size increased.");
            break;

        case "stop":
            window.speechSynthesis.cancel();
            statusText.textContent = "Speech stopped.";
            break;

        case "home":
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            assistantSpeak("Returning to home.");
            break;

        case "help":
            assistantSpeak(messages.help);
            break;

        default:
            assistantSpeak(messages.unknown);
    }
}

// Detect wake word and then command
function handleVoiceCommand(text) {

    const current = languages[getLanguage()] || languages["en-US"];

    if (!awaitingCommand) {

        const wakeDetected = current.wake.some(
            phrase => text.includes(phrase)
        );

        if (wakeDetected) {

            awaitingCommand = true;

            const wakePhrase = current.wake.find(
                phrase => text.includes(phrase)
            );

            const commandText = text.replace(wakePhrase, "").trim();

            if (commandText.length > 0) {

                const command = findCommand(
                    commandText,
                    commandWords[getLanguage()]
                );

                awaitingCommand = false;
                executeCommand(command);

            } else {
                assistantSpeak(current.prompt);
            }
        }

        return;
    }

    // Command received after wake word
    const command = findCommand(
        text,
        commandWords[getLanguage()]
    );

    awaitingCommand = false;

    executeCommand(command);
}

// Start voice assistant
startButton.addEventListener("click", () => {

    if (!setupRecognition()) {
        return;
    }

    assistantActive = true;
    awaitingCommand = false;

    updateButtons();

    recognition.start();

    assistantSpeak(
        languages[getLanguage()].ready
    );
});

// Stop voice assistant
stopButton.addEventListener("click", () => {

    assistantActive = false;
    awaitingCommand = false;

    if (recognition) {
        recognition.stop();
    }

    window.speechSynthesis.cancel();

    statusText.textContent =
        languages[getLanguage()].stopped;

    updateButtons();
});

// Initial state
updateButtons();
