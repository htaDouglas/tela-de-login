function abrirCadastro() {
    document.getElementById("overlay").style.display = "block";
}

function fecharModal() {
    document.getElementById("overlay").style.display = "none";
}

function esqueceuSenha() {
    alert("Em breve você receberá um e-mail com as instruções para redefinir sua senha.");
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aqui você pode adicionar a lógica para verificar o login
    console.log("Usuário:", username, "Senha:", password);
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    // Aqui você pode adicionar a lógica para criar uma nova conta
    console.log("Novo Usuário:", newUsername, "Nova Senha:", newPassword);
});
