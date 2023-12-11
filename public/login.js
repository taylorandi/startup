async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

async function loginOrCreate() {
    const userName = document.querySelector("#Username");
    const email = document.querySelector("#email");
    const passwd = document.querySelector("#password");
    const passwdver = document.querySelector("#passwordver");
    if (userName.value == null || userName.value == "") {
        alert("Username must contain a value");
    }
    else if (email.value == null || email.value == "") {
        alert("enter a valid email");
    }
    else if (passwd.value != passwdver.value) {
        alert("Password values must match");
    }
    else {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if (response.ok) {
            localStorage.setItem('userName', userName.value);
            window.location.href = 'play.html';
          } else {
            const body = await response.json();
            const modalEl = document.querySelector('#msgModal');
            modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
            const msgModal = new bootstrap.Modal(modalEl, {});
            msgModal.show();
          }
        }
        //value of newUser will be passed to the database once that is implemented.
        //for security purposes I am chosing to do nothing with these values right now 
        //until I get to encripting passwords and pushing to a more secure database
        window.location.href = "index.html";
    }

    function logout() {
        localStorage.removeItem('userName');
        fetch(`/api/auth/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
      }
      
      async function getUser(email) {
        let scores = [];
        // See if we have a user with the given email.
        const response = await fetch(`/api/user/${email}`);
        if (response.status === 200) {
          return response.json();
        }
      
        return null;
      }
