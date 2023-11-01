let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let mensagem = document.querySelector('#mensagem');
let enviar = document.querySelector('#submitbtn');


function validarNome() {
    let txtNome = document.getElementById('txtNome');
    if (nome.value == "") {
        nome.style.borderBottom = "solid red";
        nome.placeholder = "Campo obrigatório";
    } else if (nome.value.length < 5) {
        txtNome.innerHTML = "Insira o nome completo";
        nome.style.borderBottom = "solid red";
    } else {
        txtNome.innerHTML = "";
        nome.style.borderBottom = "solid #3F2E3E";
    }
}

nome.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && nome.value.length >= 5) {
        event.preventDefault();
        email.focus();

    }
});





function validarEmail() {
    let txtEmail = document.getElementById('txtEmail');
    if (email.value == "") {
        email.style.borderBottom = "solid red";
        email.placeholder = "Campo obrigatório";
    } else if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Insira um e-mail válido";
        email.style.borderBottom = "solid red";
    } else {
        txtEmail.innerHTML = "";
        email.style.borderBottom = "solid #3F2E3E";
    }

}

email.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && email.value.indexOf('@') != -1 && email.value.indexOf('.') != -1) {
        event.preventDefault();
        mensagem.focus();

    }
});

function validarMensagem() {
    let txtMensagem = document.getElementById('txtMensagem');
    if (mensagem.value == "") {
        mensagem.style.border = "solid red";
        mensagem.placeholder = "Campo obrigatório";
    } else if (mensagem.value.length < 10) {
        mensagem.style.border = "red";
        txtMensagem.innerHTML = "Insira no mínimo 10 caracteres";
    }else{
        txtMensagem.innerHTML = "";
        mensagem.style.border = "solid #3F2E3E";
    }
}

function enviarForm() {
    if (nome.value != "" && email.value != "" && mensagem.value != "") {
        enviar.textContent= "Enviado com sucesso!";
        enviar.style.backgroundColor = "#99B080";
    } else {
        enviar.textContent= "Preencha todos os campos";
        enviar.style.backgroundColor = "#d97b74";
    }
}