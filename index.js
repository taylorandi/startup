class userName{
    constructor() {
    const playerNameEl = document.querySelector('#Username');
    playerNameEl.textContent = this.getUserName();
   }
    

 getUserName() {
    var data = JSON.parse(localStorage.getItem("userName"));
    return data;
    }
    }

