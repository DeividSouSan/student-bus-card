import colorPickerModal from "./components/colorPickerModal.js";

import LocalStorage from "./controller/LocalStorageController.js";

const colorPickerButton = document.querySelector('.color-picker-button');

const localStorage = new LocalStorage();
const newUser = localStorage.getValues('newUser') ? false : true

if (newUser) {
    console.log('new user')
    localStorage.setValues('newUser', {"value": false});
    localStorage.setValues('themeColor', {"color": "#02C745"});
} 

const themeColor = localStorage.getValues('themeColor');

// Implementar o observer aqui depois
window.onload = () => {
    const themeColor = localStorage.getValues('themeColor');
    document.documentElement.style.setProperty('--theme-color', themeColor.color);
    console.log(themeColor)
}

colorPickerButton.addEventListener('click', () => {
    document.body.appendChild(colorPickerModal());
});