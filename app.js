var inputText = document.querySelector("#input-text");

var inputButton = document.querySelector("#input-btn");
var outputText = document.querySelector("#output-text");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function translatedURL(text) {
    return serverUrl + "?" + "text=" + text;
}

function userOutput() {
    var userText = inputText.value;

    fetch(translatedURL(userText))
    .then(response => response.json())
    .then(json => {
        var newTextTranslation = json.contents.translated;
        outputText.innerText = newTextTranslation;
    }
    )
};

inputButton.addEventListener("click", userOutput)
