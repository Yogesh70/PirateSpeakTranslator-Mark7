const inputTxt = document.querySelector('#translate-area');
const translateBtn = document.querySelector('.translate-btn');
const translatedTxt = document.querySelector('#translated-area');

let url = 'https://api.funtranslations.com/translate/pirate.json';

function generateUrl(txt) {
    return url + '?text=' + txt;
}

function translate() {
    console.log('clicked');
    let finalUrl = generateUrl(inputTxt.value);

    fetch(finalUrl)
    .then(respone => respone.json())
    .then(json => {
        translatedTxt.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
    console.log(error);
    alert("Something went wrong Try again!");
}

translateBtn.addEventListener('click',translate);