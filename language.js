
/* ==========================================
   AI ASSISTIVE COMMUNICATION SYSTEM
   CENTRAL MULTILINGUAL CONTROLLER
   English | Telugu | Hindi | Kannada
   ========================================== */

(function () {
    "use strict";

    const translations = {
        en: {
            "AI Assistive Communication System": "AI Assistive Communication System",
            "Home": "Home",
            "About": "About",
            "Features": "Features",
            "Contact": "Contact",
            "Choose Language": "Choose Language",
            "Welcome": "Welcome",
            "Welcome to AI Assistive Communication System": "Welcome to AI Assistive Communication System",
            "Speech to Text": "Speech to Text",
            "Text to Speech": "Text to Speech",
            "Smart Image Reader": "Smart Image Reader",
            "Voice Assistant": "Voice Assistant",
            "Enter your text": "Enter your text",
            "Upload Image": "Upload Image",
            "Extract Text": "Extract Text",
            "Read Aloud": "Read Aloud",
            "Speak Text": "Speak Text",
            "Start Listening": "Start Listening",
            "Stop Listening": "Stop Listening",
            "Copy Text": "Copy Text",
            "Clear": "Clear",
            "Pause": "Pause",
            "Resume": "Resume",
            "Stop": "Stop",
            "Select Language": "Select Language",
            "English": "English",
            "Telugu": "Telugu",
            "Hindi": "Hindi",
            "Kannada": "Kannada",
            "Ready": "Ready",
            "Listening...": "Listening...",
            "Processing...": "Processing...",
            "Text extracted successfully.": "Text extracted successfully.",
            "Please upload an image first.": "Please upload an image first.",
            "No text detected.": "No text detected.",
            "Please enter some text first.": "Please enter some text first.",
            "Text copied successfully.": "Text copied successfully.",
            "Speech stopped.": "Speech stopped.",
            "Reading text aloud...": "Reading text aloud...",
            "Image and text cleared.": "Image and text cleared.",
            "Loading OCR engine...": "Loading OCR engine...",
            "Extracting text...": "Extracting text...",
            "No text available to read.": "No text available to read.",
            "Microphone permission denied.": "Microphone permission denied.",
            "Start Voice Assistant": "Start Voice Assistant",
            "Say your command": "Say your command"
        },

        te: {
            "AI Assistive Communication System": "AI సహాయక కమ్యూనికేషన్ వ్యవస్థ",
            "Home": "హోమ్",
            "About": "మా గురించి",
            "Features": "ప్రత్యేకతలు",
            "Contact": "సంప్రదించండి",
            "Choose Language": "భాషను ఎంచుకోండి",
            "Welcome": "స్వాగతం",
            "Welcome to AI Assistive Communication System": "AI సహాయక కమ్యూనికేషన్ వ్యవస్థకు స్వాగతం",
            "Speech to Text": "మాటలను వచనంగా మార్చండి",
            "Text to Speech": "వచనాన్ని మాటలుగా మార్చండి",
            "Smart Image Reader": "స్మార్ట్ ఇమేజ్ రీడర్",
            "Voice Assistant": "వాయిస్ అసిస్టెంట్",
            "Enter your text": "మీ వచనాన్ని నమోదు చేయండి",
            "Upload Image": "చిత్రాన్ని అప్‌లోడ్ చేయండి",
            "Extract Text": "వచనాన్ని వెలికితీయండి",
            "Read Aloud": "గట్టిగా చదవండి",
            "Speak Text": "వచనాన్ని మాట్లాడండి",
            "Start Listening": "వినడం ప్రారంభించండి",
            "Stop Listening": "వినడం ఆపండి",
            "Copy Text": "వచనాన్ని కాపీ చేయండి",
            "Clear": "తొలగించండి",
            "Pause": "విరామం",
            "Resume": "కొనసాగించండి",
            "Stop": "ఆపండి",
            "Select Language": "భాషను ఎంచుకోండి",
            "English": "ఆంగ్లం",
            "Telugu": "తెలుగు",
            "Hindi": "హిందీ",
            "Kannada": "కన్నడ",
            "Ready": "సిద్ధంగా ఉంది",
            "Listening...": "వింటోంది...",
            "Processing...": "ప్రాసెస్ చేస్తోంది...",
            "Text extracted successfully.": "వచనం విజయవంతంగా వెలికితీయబడింది.",
            "Please upload an image first.": "ముందుగా చిత్రాన్ని అప్‌లోడ్ చేయండి.",
            "No text detected.": "వచనం గుర్తించబడలేదు.",
            "Please enter some text first.": "ముందుగా కొంత వచనాన్ని నమోదు చేయండి.",
            "Text copied successfully.": "వచనం విజయవంతంగా కాపీ చేయబడింది.",
            "Speech stopped.": "మాటలు ఆపబడ్డాయి.",
            "Reading text aloud...": "వచనాన్ని చదువుతోంది...",
            "Image and text cleared.": "చిత్రం మరియు వచనం తొలగించబడ్డాయి.",
            "Loading OCR engine...": "OCR ఇంజిన్ లోడ్ అవుతోంది...",
            "Extracting text...": "వచనాన్ని వెలికితీస్తోంది...",
            "No text available to read.": "చదవడానికి వచనం లేదు.",
            "Microphone permission denied.": "మైక్రోఫోన్ అనుమతి నిరాకరించబడింది.",
            "Start Voice Assistant": "వాయిస్ అసిస్టెంట్ ప్రారంభించండి",
            "Say your command": "మీ ఆదేశాన్ని చెప్పండి"
        },

        hi: {
            "AI Assistive Communication System": "AI सहायक संचार प्रणाली",
            "Home": "होम",
            "About": "हमारे बारे में",
            "Features": "विशेषताएँ",
            "Contact": "संपर्क करें",
            "Choose Language": "भाषा चुनें",
            "Welcome": "स्वागत है",
            "Welcome to AI Assistive Communication System": "AI सहायक संचार प्रणाली में आपका स्वागत है",
            "Speech to Text": "आवाज़ से टेक्स्ट",
            "Text to Speech": "टेक्स्ट से आवाज़",
            "Smart Image Reader": "स्मार्ट इमेज रीडर",
            "Voice Assistant": "वॉइस असिस्टेंट",
            "Enter your text": "अपना टेक्स्ट लिखें",
            "Upload Image": "चित्र अपलोड करें",
            "Extract Text": "टेक्स्ट निकालें",
            "Read Aloud": "ज़ोर से पढ़ें",
            "Speak Text": "टेक्स्ट बोलें",
            "Start Listening": "सुनना शुरू करें",
            "Stop Listening": "सुनना बंद करें",
            "Copy Text": "टेक्स्ट कॉपी करें",
            "Clear": "साफ़ करें",
            "Pause": "रोकें",
            "Resume": "फिर शुरू करें",
            "Stop": "बंद करें",
            "Select Language": "भाषा चुनें",
            "English": "अंग्रेज़ी",
            "Telugu": "तेलुगु",
            "Hindi": "हिंदी",
            "Kannada": "कन्नड़",
            "Ready": "तैयार है",
            "Listening...": "सुन रहा है...",
            "Processing...": "प्रक्रिया जारी है...",
            "Text extracted successfully.": "टेक्स्ट सफलतापूर्वक निकाला गया।",
            "Please upload an image first.": "कृपया पहले एक चित्र अपलोड करें।",
            "No text detected.": "कोई टेक्स्ट नहीं मिला।",
            "Please enter some text first.": "कृपया पहले टेक्स्ट लिखें।",
            "Text copied successfully.": "टेक्स्ट सफलतापूर्वक कॉपी हुआ।",
            "Speech stopped.": "आवाज़ बंद कर दी गई।",
            "Reading text aloud...": "टेक्स्ट पढ़ा जा रहा है...",
            "Image and text cleared.": "चित्र और टेक्स्ट साफ़ कर दिए गए।",
            "Loading OCR engine...": "OCR इंजन लोड हो रहा है...",
            "Extracting text...": "टेक्स्ट निकाला जा रहा है...",
            "No text available to read.": "पढ़ने के लिए कोई टेक्स्ट नहीं है।",
            "Microphone permission denied.": "माइक्रोफ़ोन की अनुमति नहीं मिली।",
            "Start Voice Assistant": "वॉइस असिस्टेंट शुरू करें",
            "Say your command": "अपना निर्देश बोलें"
        },

        kn: {
            "AI Assistive Communication System": "AI ಸಹಾಯಕ ಸಂವಹನ ವ್ಯವಸ್ಥೆ",
            "Home": "ಮುಖಪುಟ",
            "About": "ನಮ್ಮ ಬಗ್ಗೆ",
            "Features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
            "Contact": "ಸಂಪರ್ಕಿಸಿ",
            "Choose Language": "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            "Welcome": "ಸ್ವಾಗತ",
            "Welcome to AI Assistive Communication System": "AI ಸಹಾಯಕ ಸಂವಹನ ವ್ಯವಸ್ಥೆಗೆ ಸ್ವಾಗತ",
            "Speech to Text": "ಮಾತನ್ನು ಪಠ್ಯವಾಗಿ",
            "Text to Speech": "ಪಠ್ಯವನ್ನು ಮಾತಾಗಿ",
            "Smart Image Reader": "ಸ್ಮಾರ್ಟ್ ಇಮೇಜ್ ರೀಡರ್",
            "Voice Assistant": "ಧ್ವನಿ ಸಹಾಯಕ",
            "Enter your text": "ನಿಮ್ಮ ಪಠ್ಯವನ್ನು ನಮೂದಿಸಿ",
            "Upload Image": "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            "Extract Text": "ಪಠ್ಯವನ್ನು ಹೊರತೆಗೆಯಿರಿ",
            "Read Aloud": "ಗಟ್ಟಿಯಾಗಿ ಓದಿ",
            "Speak Text": "ಪಠ್ಯವನ್ನು ಮಾತನಾಡಿ",
            "Start Listening": "ಆಲಿಸುವುದನ್ನು ಪ್ರಾರಂಭಿಸಿ",
            "Stop Listening": "ಆಲಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
            "Copy Text": "ಪಠ್ಯವನ್ನು ನಕಲಿಸಿ",
            "Clear": "ಅಳಿಸಿ",
            "Pause": "ವಿರಾಮ",
            "Resume": "ಮುಂದುವರಿಸಿ",
            "Stop": "ನಿಲ್ಲಿಸಿ",
            "Select Language": "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            "English": "ಇಂಗ್ಲಿಷ್",
            "Telugu": "ತೆಲುಗು",
            "Hindi": "ಹಿಂದಿ",
            "Kannada": "ಕನ್ನಡ",
            "Ready": "ಸಿದ್ಧವಾಗಿದೆ",
            "Listening...": "ಆಲಿಸಲಾಗುತ್ತಿದೆ...",
            "Processing...": "ಪ್ರಕ್ರಿಯೆ ನಡೆಯುತ್ತಿದೆ...",
            "Text extracted successfully.": "ಪಠ್ಯವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಹೊರತೆಗೆಯಲಾಗಿದೆ.",
            "Please upload an image first.": "ದಯವಿಟ್ಟು ಮೊದಲು ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.",
            "No text detected.": "ಯಾವುದೇ ಪಠ್ಯ ಪತ್ತೆಯಾಗಿಲ್ಲ.",
            "Please enter some text first.": "ದಯವಿಟ್ಟು ಮೊದಲು ಪಠ್ಯವನ್ನು ನಮೂದಿಸಿ.",
            "Text copied successfully.": "ಪಠ್ಯವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ನಕಲಿಸಲಾಗಿದೆ.",
            "Speech stopped.": "ಮಾತು ನಿಲ್ಲಿಸಲಾಗಿದೆ.",
            "Reading text aloud...": "ಪಠ್ಯವನ್ನು ಓದಲಾಗುತ್ತಿದೆ...",
            "Image and text cleared.": "ಚಿತ್ರ ಮತ್ತು ಪಠ್ಯವನ್ನು ಅಳಿಸಲಾಗಿದೆ.",
            "Loading OCR engine...": "OCR ಎಂಜಿನ್ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
            "Extracting text...": "ಪಠ್ಯವನ್ನು ಹೊರತೆಗೆಯಲಾಗುತ್ತಿದೆ...",
            "No text available to read.": "ಓದಲು ಯಾವುದೇ ಪಠ್ಯವಿಲ್ಲ.",
            "Microphone permission denied.": "ಮೈಕ್ರೊಫೋನ್ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ.",
            "Start Voice Assistant": "ಧ್ವನಿ ಸಹಾಯಕವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
            "Say your command": "ನಿಮ್ಮ ಆಜ್ಞೆಯನ್ನು ಹೇಳಿ"
        }
    };

    let currentLanguage = "en";

    function translate(key) {
        return translations[currentLanguage]?.[key] || key;
    }

    function applyLanguage(lang) {
        if (!translations[lang]) return;

        currentLanguage = lang;

        // Save language selection
        try {
            localStorage.setItem("preferredLanguage", lang);
        } catch (error) {
            console.warn("Language preference could not be saved.");
        }

        // Translate normal text
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            element.textContent = translate(key);
        });

        // Translate placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
            const key = element.getAttribute("data-i18n-placeholder");
            element.placeholder = translate(key);
        });

        // Translate accessibility labels
        document.querySelectorAll("[data-i18n-aria]").forEach(element => {
            const key = element.getAttribute("data-i18n-aria");
            element.setAttribute("aria-label", translate(key));
        });

        // Update document language
        document.documentElement.lang = lang;

        // Notify other modules
        window.dispatchEvent(new CustomEvent("languageChanged", {
            detail: {
                language: lang,
                speechLanguage: {
                    en: "en-US",
                    te: "te-IN",
                    hi: "hi-IN",
                    kn: "kn-IN"
                }[lang]
            }
        }));

        console.log("Website language changed to:", lang);
    }

    // Public functions for other JavaScript modules
    window.translateText = translate;
    window.changeWebsiteLanguage = applyLanguage;
    window.getWebsiteLanguage = function () {
        return currentLanguage;
    };

    // Initialize after HTML loads
    function initializeLanguage() {
        const selector = document.getElementById("siteLanguage");

        let savedLanguage = "en";

        try {
            savedLanguage = localStorage.getItem("preferredLanguage") || "en";
        } catch (error) {
            console.warn("Using default language.");
        }

        if (selector) {
            selector.value = savedLanguage;

            selector.addEventListener("change", function () {
                applyLanguage(this.value);
            });
        }

        applyLanguage(savedLanguage);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeLanguage);
    } else {
        initializeLanguage();
    }

})();
