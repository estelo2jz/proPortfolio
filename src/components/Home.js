import React, { Component } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
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
              <p>Web Developer</p>
              <div className="hero__logo">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/" target="_blank"><FaLinkedin /></a>
                  </li>
                  <li>
                    <a href="https://github.com/estelo2jz" target="_blank"><FaGithub /></a>   
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am an experienced self-taught Web developer with 2+ years of experience. Where I am able to design and build web application. My other hobbies besides coding are computers and cars mostly JDMs. I spent most of time learning and honing my current skillset. I'm a tech enthusiast, passionate in codes. 
              I love to design and build responsive web applications. I am eager to learn new techonologies, and I'm currently looking for new opportunities.
            </p>
          </div>
          {/* <div className="column__right">
            <img src={Picme2} alt="brain" className="hero__img"/>
          </div> */}
        </div>
      </div>
    )
  }
}
