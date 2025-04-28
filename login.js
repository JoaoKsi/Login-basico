function verificarLogin() {
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let mensagemDiv = document.getElementById("mensagem");

    if (usuario === "" || senha === "") {
        mensagemDiv.textContent = "Preencha todos os campos.";
        mensagemDiv.className = "mensagem erro";
    } else if (senha === "12345") {
        mensagemDiv.textContent = `Bem-vindo, ${usuario}`;
        mensagemDiv.className = "mensagem sucesso";
    } else {
        mensagemDiv.textContent = "Senha incorreta. Tente novamente.";
        mensagemDiv.className = "mensagem erro";
    }
}
