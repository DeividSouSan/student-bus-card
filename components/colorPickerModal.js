import LocalStorageController from "../controller/LocalStorageController.js";

export default function colorPickerModal() {
    // Modal Container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('colorPickerContainer');

    modalContainer.onclick = (event) => {
        if (event.target.classList.contains('colorPickerContainer')) {
            modalContainer.remove();
        }
    }

    // Modal 
    const modal = document.createElement('div');
    modal.classList.add('colorPickerModal');

    const modalHeader = document.createElement('h1');
    modalHeader.innerText = 'Selecione uma cor';

    const themeColorPicker = document.createElement('input');
    themeColorPicker.type = 'color';
    themeColorPicker.value = document.documentElement.style.getPropertyValue('--theme-color');

    const fontThemePicker = document.createElement('input');
    fontThemePicker.type = 'color';
    fontThemePicker.value = document.documentElement.style.getPropertyValue('--font-color');


    let fetchedURL;
    const imgPreview = document.createElement('img');

    fetch('https://source.unsplash.com/random/480x300')
        .then(response => {
            fetchedURL = response.url;
            imgPreview.src = fetchedURL;
        })


    const selectButton = document.createElement('button');
    selectButton.innerText = 'Selecionar';
    selectButton.type = 'button';


    selectButton.onclick = async () => {

        const localStorage = new LocalStorageController();
        localStorage.setValues('themeColor', { "color": themeColorPicker.value });
        localStorage.setValues('fontColor', { "color": fontThemePicker.value });
        localStorage.setValues('imageURL', { "url": fetchedURL });

        modalContainer.remove();
        window.location.reload();
    }

    const appends = (element, ...appends) => {
        appends.forEach(append => {
            element.appendChild(append);
        });
    }
    // Modal Appends
    appends(modal, modalHeader, themeColorPicker, fontThemePicker, imgPreview, selectButton);

    // Appends
    modalContainer.appendChild(modal);

    return modalContainer;
}