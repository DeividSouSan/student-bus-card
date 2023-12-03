import colorPickerModal from "./components/colorPickerModal.js";

import LocalStorage from "./controller/LocalStorageController.js";

const colorPickerButton = document.querySelector('.color-picker-button');

const localStorage = new LocalStorage();
const newUser = localStorage.getValues('newUser') ? false : true

if (newUser) {
    localStorage.setValues('newUser', { "value": false });
    localStorage.setValues('detailsColor', { "color": "#02C745" });
    localStorage.setValues('fontColor', { "color": "#000000" });
    localStorage.setValues('imageURL', { "url": "https://fakeimg.pl/480x300?text=card+img" });
}

const detailsColor = localStorage.getValues('detailsColor');
const fontColor = localStorage.getValues('fontColor');
const imageURL = localStorage.getValues('imageURL');

document.documentElement.style.setProperty('--details-color', detailsColor.color);
document.documentElement.style.setProperty('--font-color', fontColor.color);
document.documentElement.style.setProperty('--card-image', `url(${imageURL.url})`);

colorPickerButton.addEventListener('click', () => {
    console.log(colorPickerModal())
    document.body.appendChild(colorPickerModal());
});