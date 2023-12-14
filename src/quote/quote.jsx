import React from "react";
import './quote.css'

export function Quote() {
    return (
    <main>
    <h1>Request a quote</h1>
    
    <li>
        <fieldset>
            <legend>File type</legend>
            <label id="checkbox1">.stl</label>
            <input type="checkbox"  id="stl"/> 
            <label id="checkbox2">.cad</label>
            <input type="checkbox" value="checkbox2" id="cad" /> 
            <label id="checkbox3">.jpeg</label>
            <input type="checkbox" value="checkbox3" id="jpeg" /> 
        </fieldset>
    </li>
    <li>
        
        <input type="file" value="file" id="file" />

    </li>
    <li>
        <label id="quantity">Quantity of prints:</label>
        <input
            className='form-control'
            type='text'
            value={quantity}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='0'
          />
    </li>
    <li>
        <label id="type">Method of printing:</label>
        <select name="typeSelect" id="tysel" className="tysel">
            <option>Filiment</option>
            <option>Resin</option>
            <option>Laser Sintering</option>
        </select> 
    </li>
    <button type="submit" >Submit</button>
  </main>
    );
}