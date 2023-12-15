import React from "react";
import './login.css'

export function Login(props){
    const [userName, setUserName] = React.useState(props.userName);
    const [email, setUserEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: email, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

    return (
        <>
        <div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Username: </span>
            <input
              className='form-control'
              type='text'
              onChange={(e) => setUserName(e.target.value)}
              placeholder='username'
            />
            </div>
            <div>
            <span className='input-group-text'>Email: </span>
            <input
              className='form-control'
              type='text'
              value={email}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder='your@email.com'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Password: </span>
            <input
              className='form-control'
              type='text'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
            />
          </div>
          <button variant='primary' onClick={() => loginUser()}>
            Login
          </button>
          <button variant='secondary' onClick={() => createUser()}>
            Create
          </button>
        </div>
  
        
      </>
    );
}