function login(){
    const userName = document.querySelector("#Username");
    const email = document.querySelector("#email");
    const passwd = document.querySelector("#password");
    localStorage.setItem("username", userName.value);
    window.location.href = "login.html"
}