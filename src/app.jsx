import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Service } from './service/service';
import { Quote } from './quote/quote';
import './app.css';


function User() {
    const data = localStorage.getItem("userName");
    if (data != null) {
        return (
            <div>Username: {data}</div>
        );
    } else {
        return (
            <div>Username: Login</div>
        );
    }
}


export default function App() {
    return (
        <BrowserRouter>
            <div className='body'>
                <header>
                    <h1>Ivy 3D</h1>
                    <section>
                        <div className="Username">
                            <User />
                        </div>
                    </section>
                </header>
                <nav>
                    <div><NavLink className='nav-link' to=''>Home</NavLink></div>
                    <div><NavLink className='nav-link' to="login">Login or an crate account</NavLink></div>
                    <div><NavLink className='nav-link' to="quote">Request a quote</NavLink></div>
                    <div><NavLink className='nav-link' to="services">Services</NavLink></div>
                </nav>

                <Routes>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/login' element={<Login />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/quote' element={<Quote />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <a href="https://github.com/taylorandi/startup.git">Github</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
