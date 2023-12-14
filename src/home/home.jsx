import React from "react";
import printy from './printy.jpeg';
import './home.css';

function Print() {
  return (
      <img src={printy} alt="Printer Image" width={350} />
  );
}

export function Home(props) {
  return (
    <main>
      <Print />
      <div id="about">
        <h2>About us</h2>
        <p>Ivy 3D, is an all in one 3D addative manufacturing shop,
          capable of providing for all of your 3D printing needs.
          We can print your designs if you have a modeled part, or we can model
          and print your parts for you. Request a quote today to see how we can help you.</p>
        <h3>Chat with one of our representatives: </h3>
      </div>

    </main>
  );
}