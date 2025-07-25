const navbarMenu = document.querySelector(".navbar .links")
const menuBtn = document.querySelector(".menu-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});


// mostra o formulário
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// esconde o formulário
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());


loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
        clearFormFields(".login");
        clearFormFields(".signup");
    }); 
});




// Captura os dados no fórum de signup

document.querySelector(".signup form").addEventListener("submit", (e) => {e.preventDefault();

    const email = document.querySelector(".signup input[type='text']").value.trim();
    const password = document.querySelector(".signup input[type='password']").value;

    // Simulado salvar no localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Conta criada com sucesso!");
});


// Verificação de login

document.querySelector(".login form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector(".login input[type='text']").value.trim();
    const password = document.querySelector(".login input[type='password']").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if(email === savedEmail && password === savedPassword){
        alert("Login realizado com sucesso!");
    } else{
        alert("Email ou senha incorretos.");
    }
});



// Limpa os campos 
function clearFormFields(formSelector) {
    document.querySelectorAll(`${formSelector} input`).forEach(input => {
        input.value = "";
        input.classList.remove("input-error"); // remove marcações de erro também
    });
}



