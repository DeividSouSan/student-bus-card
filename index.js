import colorPickerModal from "./components/colorPickerModal.js";
import LocalStorage from "./controller/LocalStorageController.js";

const colorPickerButton = document.querySelector('.color-picker-button');

const localStorage = new LocalStorage();
const appearence = localStorage.getValues('appearence');

const setProperty = (property, value) => {
    document.documentElement.style.setProperty(property, value);
}

const userExist = localStorage.getValues('newUser');
const newUser = userExist ? false : true

if (newUser) {
    localStorage.setValues(
        "appearence", {
        'detailsColor': "#02C745",
        'fontColor': "#000000",
        'imageURL': "https://fakeimg.pl/480x300?text=card+img"
    });

    localStorage.setValues('newUser', { "value": false });
}

setProperty('--details-color', appearence.detailsColor);
setProperty('--font-color', appearence.fontColor);
setProperty('--card-image', `url(${appearence.imageURL})`);

colorPickerButton.onclick = () => document.body.appendChild(colorPickerModal());

