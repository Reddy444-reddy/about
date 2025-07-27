 import React from "react";
import "./Navbar.css"; // Assuming you have a CSS file for styling

export default function SmartCookie() {
  return (
    <div className="smart-cookie">
      <header className="header">
        <img src="logo.png" alt="Smart Cookie Logo" className="logo" />
        <nav>
          <ul className="nav">
            <li>Home</li>
            <li>Team</li>
            <li>Login As</li>
            <li>Products</li>
            <li>Our Sponsors</li>
            <li>Contact</li>
            <li>Register</li>
            <li>
              <select>
                <option>Find</option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
      <div className="about-left"> 
<p className="highlight">
  <span>
    College students! Are you looking for internship where you can do meaningful
    things that make a difference in your career.{" "}
    <a href="#">Register Here</a>
  </span>
</p>
<div className="grid-wrapper">
  {/* LEFT COLUMN (50% width, two rows) */}
  <div className="left-column">
    {/* TOP: About Section */}
    <section className="about">
      <h1>About Smart Cookie</h1>
      <p>
        Smart Cookie / Protsahan Bharti is a Student-Teacher Reward Program.
        It is a process of providing "Just in Time" Rewards for the
        encouragement of Students and Teachers to bring out the Best in them.
      </p>
      <div className="buttons">
        <button className="btn-know">Know More</button>
        <button className="btn-chat">Click Here For Helpdesk Chat</button>
      </div>
    </section>

    {/* BOTTOM: Apps Section */}
    <section className="apps">
      <h2>Download Our Apps From Here</h2>
      <div className="app-icons">
        <div className="icon">
          <img src="student.png" alt="Smart Student App" />
          <button className="app-btn">Smart Student App</button>
        </div>
        <div className="icon">
          <img src="teacher.png" alt="Smart Teacher App" />
          <button className="app-btn">Smart Teacher App</button>
        </div>
        <div className="icon">
          <img src="procoin.png" alt="Smart Corporate App" />
          <button className="app-btn">Smart Corporate App</button>
        </div>
      </div>
    </section>
  </div>

  {/* RIGHT COLUMN: Full-height Image Container */}
  <div className="image-slider">
    <img src="is2.jpg" alt="Slide 1" className="slider-image img1" />
    <img src="image2.jpg" alt="Slide 2" className="slider-image img2" />
  </div>
</div>
      </div>

    </div>
  );
}