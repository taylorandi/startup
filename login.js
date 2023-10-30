function login() {
    const userName = document.querySelector("#Username");
    const email = document.querySelector("#email");
    const passwd = document.querySelector("#password");
    const passwdver = document.querySelector("#passwordver");
    if(userName.value == null || userName.value == ""){
        alert("Username must contain a value");
    }
    else if(email.value == null || email.value == ""){
        alert("enter a valid email");
    }
    else if(passwd.value != passwdver.value){
        alert("Password values must match");
    }
    else{
    localStorage.setItem("userName", userName.value);
    window.location.href = "index.html";
    }
    }