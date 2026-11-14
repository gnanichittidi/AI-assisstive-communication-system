
const translations = {
    "en-US": {
        welcome: "Communication Without Limits",
        description: "Empowering everyone through intelligent, accessible and multilingual communication.",
        speech: "Speech to Text",
        speechDesc: "Convert spoken words into written text instantly.",
        text: "Text to Speech",
        textDesc: "Convert written messages into natural voice.",
        image: "Smart Image Reader",
        imageDesc: "Extract text from images and listen to the content.",
        quick: "Quick Communication",
        quickDesc: "Communicate using ready-made messages.",
        explore: "Explore Feature"
    },

    "te-IN": {
        welcome: "పరిమితులు లేని కమ్యూనికేషన్",
        description: "అందరికీ సులభమైన మరియు అందుబాటులో ఉండే కమ్యూనికేషన్.",
        speech: "మాటలను వచనంగా మార్చడం",
        speechDesc: "మాట్లాడిన పదాలను వచనంగా మార్చండి.",
        text: "వచనాన్ని మాటలుగా మార్చడం",
        textDesc: "వ్రాసిన సందేశాలను శబ్దంగా మార్చండి.",
        image: "చిత్రం నుండి వచనం",
        imageDesc: "చిత్రాల నుండి వచనాన్ని గుర్తించి వినండి.",
        quick: "త్వరిత కమ్యూనికేషన్",
        quickDesc: "సిద్ధంగా ఉన్న సందేశాలతో మాట్లాడండి.",
        explore: "ప్రారంభించండి"
    },

    "hi-IN": {
        welcome: "बिना सीमाओं के संचार",
        description: "सभी के लिए आसान और सुलभ संचार।",
        speech: "आवाज़ से टेक्स्ट",
        speechDesc: "बोले गए शब्दों को टेक्स्ट में बदलें।",
        text: "टेक्स्ट से आवाज़",
        textDesc: "लिखे हुए संदेशों को आवाज़ में बदलें।",
        image: "स्मार्ट इमेज रीडर",
        imageDesc: "चित्रों से टेक्स्ट निकालें और सुनें।",
        quick: "त्वरित संचार",
        quickDesc: "तैयार संदेशों से संवाद करें।",
        explore: "शुरू करें"
    },

    "kn-IN": {
        welcome: "ಮಿತಿಯಿಲ್ಲದ ಸಂವಹನ",
        description: "ಎಲ್ಲರಿಗೂ ಸುಲಭ ಮತ್ತು ಸುಲಭವಾಗಿ ಲಭ್ಯವಿರುವ ಸಂವಹನ.",
        speech: "ಮಾತಿನಿಂದ ಪಠ್ಯಕ್ಕೆ",
        speechDesc: "ಮಾತನಾಡಿದ ಪದಗಳನ್ನು ಪಠ್ಯವಾಗಿ ಪರಿವರ್ತಿಸಿ.",
        text: "ಪಠ್ಯದಿಂದ ಮಾತಿಗೆ",
        textDesc: "ಬರೆದ ಸಂದೇಶಗಳನ್ನು ಧ್ವನಿಯಾಗಿ ಪರಿವರ್ತಿಸಿ.",
        image: "ಸ್ಮಾರ್ಟ್ ಚಿತ್ರ ಓದುಗ",
        imageDesc: "ಚಿತ್ರಗಳಿಂದ ಪಠ್ಯವನ್ನು ಹೊರತೆಗೆದು ಕೇಳಿ.",
        quick: "ತ್ವರಿತ ಸಂವಹನ",
        quickDesc: "ಸಿದ್ಧ ಸಂದೇಶಗಳ ಮೂಲಕ ಸಂವಹನ ಮಾಡಿ.",
        explore: "ಪ್ರಾರಂಭಿಸಿ"
    }
};

function changeLanguage(language) {
    const selected = translations[language];

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;

        if (selected[key]) {
            element.textContent = selected[key];
        }
    });
}

document.getElementById("language").addEventListener("change", function() {
    changeLanguage(this.value);
});

function openFeature(feature) {
    alert("The " + feature + " module will be developed next!");
}
