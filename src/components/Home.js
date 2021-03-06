import React, { Component } from 'react';
import Logo1 from '../logo/logo3.png';
import Picme2 from "../images/me.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="hero__section" id="home">
        <div className="hero__wrapper">
          <div className="column__left">
            {/* <span>
              Estelo Abellanosa */}
              {/* <img src={Picme2} alt="logo" className="main__img" /> */}
            {/* </span> */}
            <div className="hero__header">
              <p>Front-End Developer</p>
            </div>
            <p>
              I am an experienced front-end web developer. I'm into computers, cars and music. My favorate place to be is in front of my computer, where I spent most of time learning and honing my current skillset. I'm a tech enthusiast, passionate in codes. 
              I love to design and build responsive web applications. I am eager to learn new techonologies, and I'm currently looking for new opportunities.
            </p>
          </div>
          <div className="column__right">
            <img src={Picme2} alt="brain" className="hero__img"/>
          </div>
        </div>
      </div>
    )
  }
}
