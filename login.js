async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }
  
  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

async function loginOrCreate(endpoint) {
    const userName = document.querySelector("#Username")?.value;
    const email = document.querySelector("#email")?.value;
    const passwd = document.querySelector("#password")?.value;
    const passwdver = document.querySelector("#passwordver")?.value;
    if (userName == null || userName == "") {
        alert("Username must contain a value");
    }
    else if (email == null || email == "") {
        alert("enter a valid email");
    }
    else if (passwd != passwdver) {
        alert("Password values must match");
    }
    else {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ email: email, password: passwd }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if (response.ok) {
            localStorage.setItem('userName', userName);
            window.location.href = "index.html";
          } else {
            const body = await response.json();
            alert("Could not log in");
          }
          
        }
        //value of newUser will be passed to the database once that is implemented.
        //for security purposes I am chosing to do nothing with these values right now 
        //until I get to encripting passwords and pushing to a more secure database
       
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
