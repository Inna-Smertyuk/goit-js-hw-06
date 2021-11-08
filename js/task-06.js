const validatorInput = document.querySelector('#validation-input');
const dataLength = Number(validatorInput.getAttribute('data-length'));

validatorInput.addEventListener("blur", changeColor);

function changeColor() {
    if (validatorInput.value.length === dataLength) {
        validatorInput.classList.remove('invalid');
        validatorInput.classList.add('valid');

    } else {
        validatorInput.classList.remove('valid');
        validatorInput.classList.add('invalid');
    }
};