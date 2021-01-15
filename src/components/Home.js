import React, { Component } from 'react';
import Logo1 from '../logo/logo3.png';
import Picme2 from "../images/me.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section" id="home">
        <div className="hero__wrapper">
          <div className="column__left">
            <span>
              Estelo Abellanosa
              {/* <img src={Picme2} alt="logo" className="main__img" /> */}
            </span>
            <h1>Front-End Developer</h1>
            <p>
              I am an experienced front-end web developer. Where I spent most of time learning and honing my current skillset. I'm a tech enthusiast, passionate in codes. 
              I love to design and build responsive web applications, and I'm currently looking for new opportunities.</p>
          </div>
          <div className="column__right">
            <img src={Picme2} alt="brain" className="hero__img"/>
          </div>
        </div>
      </div>
    )
  }
}
