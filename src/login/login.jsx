import React from "react";
import './login.css'

export function Login(){
    return (
        <main>
        <li>
            <label for="Username">Username:</label>
            <input type="text" id="Username" placeholder="Username"/>
        </li>
        <li>
            <label for="email">Email:</label>
            <input type="email" id="email" name="varemail" placeholder="me@.me.com"/>
        </li>
        <li>
            <label for="password">Password:</label>
            <input type="password" name="userPassword" id="password"/>
            </li>
            <li>
            <label for="passwordver">Verify Password:</label>
            <input type="password" name="userPasswordver" id="passwordver"/>
        </li>
        <button className-="btn btn-primary" onclick="loginUser()">Login</button>
        <button className="btn-primary" onclick="createUser()">Create Account</button>
        <button className="btn-primary" onclick="logout()">logout</button>

    
    </main>
    );
}