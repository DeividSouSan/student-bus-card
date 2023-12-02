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

    // Modal Itself
    const modal = document.createElement('div');
    modal.classList.add('colorPickerModal');

    const modalHeader = document.createElement('h1');
    modalHeader.innerText = 'Selecione uma cor';

    const colorPickerInput = document.createElement('input');
    colorPickerInput.type = 'color';

    const submitButton = document.createElement('button');
    submitButton.innerText = 'Selecionar';

    submitButton.onclick = () => { 
        const localStorage = new LocalStorageController();
        localStorage.setValues('themeColor', {"color": colorPickerInput.value});
        modalContainer.remove();
        window.location.reload();
    }
    // Modal Appends
    modal.appendChild(modalHeader);
    modal.appendChild(colorPickerInput);
    modal.appendChild(submitButton);

    // Appends
    modalContainer.appendChild(modal);

    return modalContainer;
}