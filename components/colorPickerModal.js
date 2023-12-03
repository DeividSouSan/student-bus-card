import LocalStorageController from '../controller/LocalStorageController.js';

export default function colorPickerModal() {
    const template = document.querySelector('.color-picker-template');
    const modal = template.content.cloneNode(true);
    const modalContainer = modal.querySelector('.modal-container');

    modalContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal-container')) {
            modalContainer.remove();
        }
    });

    const localStorage = new LocalStorageController();

    const imagePreview = modal.querySelector('img');
    imagePreview.src = localStorage.getValues('imageURL').url;
    const refreshImageButton = modal.querySelector('.refresh-image-button');

    let fetchedURL;

    const changeImage = async () => {
        refreshImageButton.disabled = true;
        await fetch('https://source.unsplash.com/random/480x300')
            .then(response => {
                fetchedURL = response.url;
                imagePreview.src = fetchedURL;
            })
            .finally(() => {
                refreshImageButton.disabled = false;
            })
    }

    refreshImageButton.addEventListener('click', () => {
        changeImage();
    });

    const detailsColor = modal.querySelector('.color-picker-input');
    detailsColor.value = document.documentElement.style.getPropertyValue('--details-color');

    const fontColor = modal.querySelector('.font-color-input');
    fontColor.value = document.documentElement.style.getPropertyValue('--font-color');

    const selectButton = modal.querySelector('.select-button');
    selectButton.onclick = async () => {
        localStorage.setValues('detailsColor', { "color": detailsColor.value });
        localStorage.setValues('fontColor', { "color": fontColor.value });
        localStorage.setValues('imageURL', { "url": fetchedURL });

        modalContainer.remove();
        window.location.reload();
    }

    return modal;
}