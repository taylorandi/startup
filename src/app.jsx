import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/home';
import { Login } from './login/login';
import { Services } from './service/service';
import { Quote } from './quote/quote';
import './app.css';

function User(){
    const data = localStorage.getItem("userName");
    if(data != null ){
        return(
            <div>Username: {data}</div>
           );
    } else {
   return(
    <div>Username: Login</div>
   );
    }
}

export default function App() {
    return (
        <div className='body'>
        <header>
        <h1>Ivy 3D</h1>
    <section>
      <div class="Username">
        <User />
      </div>
    </section>
  </header>
  <nav>
    <div><NavLink className='nav-link' to='Home'>Home</NavLink></div>
    <div><NavLink className='nav-link' to="Login">Login or an crate account</NavLink></div>
    <div><NavLink className='nav-link' to="Quote">Request a quote</NavLink></div>
    <div><NavLink className='nav-link' to="Services">Services</NavLink></div>
  </nav>
  <main>Main code here</main>
  <footer>
    <a href="https://github.com/taylorandi/startup.git">Github</a>
  </footer>
  </div>
    );
}
