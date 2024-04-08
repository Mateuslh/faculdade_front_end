function enviarMensagem() {
    var mensagem = document.getElementById("user-message").value;
    var novaMensagem = document.createElement("div");
    novaMensagem.classList.add("chat-message", "sent");

    novaMensagem.innerHTML = `
        <div class="sender">Você diz:</div>
        <p class="message">${mensagem}</p>
    `;
    document.querySelector(".chat-box").appendChild(novaMensagem);
    document.getElementById("user-message").value = "";
}
