function setItem() {
    var data = localStorage.getItem("userName");
    const charText = document.querySelector("div");
    charText.innerHTML =
        `   <div class="Username">Username: <span class="User-name"> data </span>`;
}
