import React, { Component } from 'react';
import Logo1 from '../logo/logo3.png';
import Picme2 from "../logo/pic.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section" id="home">
        <div className="hero__wrapper">
          <div className="column__left">
            <span>
              v4 - Estelo Abellanosa
              <img src={Picme2} alt="logo" className="main__img" />
            </span>
            <h1>Front-End Web Developer</h1>
            <p>
              I have 2 years of experience as a web developer. I'm a tech enthusiast passionate in codes. 
              I design, build web applications, and I'm currently looking for new opportunities.</p>
          </div>
          <div className="column__right">
            <img src={Logo1} alt="brain" className="hero__img"/>
          </div>
        </div>
      </div>
    )
  }
}
