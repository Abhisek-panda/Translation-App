
var inputArea = document.querySelector("#first-area");

var btnTranslation = document.querySelector("#btn");

var outputArea = document.querySelector("#second-area");

// console.log(inputArea);
// console.log(btnTranslation);

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
};

function secondBox() { 
    // outputBox.innerText = "ajajaj " + outputArea.value;

    var inputText = inputArea.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var textTranlation = json.contents.translated;

        outputArea.innerText = textTranlation;
        }
    )
};

btnTranslation.addEventListener("click", secondBox());