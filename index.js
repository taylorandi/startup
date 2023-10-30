class user{
  constructor(){
    const user = getUser();
    setUser(user);
  }

getUser() {
  return localStorage.getItem("userName");
}
     setUser(user){
      const charText = document.document.querySelector('span');
      charText.innerHTML =
          `<span class="User-name"> ${user} </span>`;
     }
    }
