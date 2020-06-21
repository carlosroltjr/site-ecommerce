const submeter = (event) => {
    event.preventDefault()
    if (validar()) {
        const alerta = document.createElement("spam")
        const formulario = document.getElementById("formulario")
        alerta.style.color = "green"
        alerta.innerHTML = "Formulário enviado com sucesso!"
        formulario.before(alerta)
    }
}

const validar = () => {
    let validou = true
    limparMensagem()
    limparCorBorda()
    document.querySelectorAll("input, select, textarea").forEach(el => {
        if (el.value == null || el.value == "") {
            el.style.borderColor = "red"
            const alerta = document.createElement("spam")
            alerta.style.color = "red"
            alerta.style.display = "inline-block"
            alerta.innerHTML = "* Campo " + el.name + " é obrigatório *"
            el.after(alerta)
            validou = false
        } else {
            el.style.borderColor = "green"
        }
    })
    return validou
}

const limparMensagem = () => {
    document.querySelectorAll("spam").forEach(el => {
        el.innerHTML = "";
        el.style.display = "none";
    })
}

const limparCorBorda = () => {
    document.querySelectorAll("input, select, textarea").forEach(el => {
        el.style.borderColor = "initial"
    })
}