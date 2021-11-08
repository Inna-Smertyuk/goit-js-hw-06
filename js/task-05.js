const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};
refs.input.addEventListener("input", changeInput);

function changeInput(event) {
    refs.output.textContent = event.currentTarget.value;
    if (refs.output.textContent === "") {
        return refs.output.textContent = "Anonymous";
    }
}