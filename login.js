function login() {
    const userName = document.querySelector("#Username");
    const email = document.querySelector("#email");
    const passwd = document.querySelector("#password");
    const passwdver = document.querySelector("#passwordver");
    
    localStorage.setItem("userName", userName.value);
    window.location.href = "login.html";
    }

    getUserName(); {
        return localStorage.getItem('userName') ?? 'Login';
    }