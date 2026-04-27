


const regexNomeFlexivel = /^[A-ZÀ-Ÿ][a-zà-ÿ]+( (de|da|do|dos|das|e|([a-zà-ÿ]+))? ?[A-ZÀ-Ÿa-zà-ÿ][a-zà-ÿ]+)+$/i;

function validaFormulario() {
    const inputnome = document.querySelector('#inputnome').value.trim();

    if (!regexNomeFlexivel.test(inputnome)) {
        alert('Por favor, insira um nome e sobrenome válidos.');
        return false;
    }
    return true;
}

