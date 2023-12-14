import React from 'react';
import './app.css';

function Login(){
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
        <Login />
      </div>
    </section>
  </header>
  <nav>
    <div><a href="index.html">Home</a></div>
    <div><a href="login.html">Login or an crate account</a></div>
    <div><a href="quote.html">Request a quote</a></div>
    <div><a href="services.html">Services</a></div>
  </nav>
  <main>Main code here</main>
  <footer>
    <a href="https://github.com/taylorandi/startup.git">Github</a>
  </footer>
  </div>
    );
}
