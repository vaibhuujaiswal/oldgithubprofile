import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="container">
      <nav>
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <header>
        <h1>Welcome to my portfolio</h1>
        <p>I am a web developer specializing in React JS and CSS.</p>
      </header>
      <section>
        <h2>My Work</h2>
        <ul className="posts">
          <li>
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
          <li>
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
        <p>All rights reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </footer>
    </div>
  );
}

export default App;
