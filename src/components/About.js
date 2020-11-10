import React, { Component } from 'react';
import Picme from "../logo/pic.jpg";

import HTML from '../logo/skills/html-5.svg'
import CSS from '../logo/skills/css.svg';
import SCSS from '../logo/skills/sass.svg';
import JavaScript from '../logo/skills/javascript.svg';
import Python from '../logo/skills/python.svg';
import ReactSkill from '../logo/skills/react.svg';
import NodeJS from '../logo/skills/nodejs.svg';
import MySQL from '../logo/skills/mysql.svg';

export default class About extends Component {
  render() {
    return (
      <div className="main__section" id="about">
        <div className="main__container">
          <h1>Hello, I'm Estelo!</h1>
          <div className="main__content">
            <div className="main__text">
              <h2>I'm a Front-End Developer currently living in Beach Park, Illinois.</h2>
              <p>
                I like to code starting from scratch, and see where it leads me. 
                I like to animate things and bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful user experience.
              </p>
              <div className="main__skills-container">
                <ul>
                  <li><img src={HTML} /><p>HTML</p></li>
                  <li><img src={CSS} /><p>CSS</p></li>
                  <li><img src={SCSS} /><p>SCSS</p></li>
                  <li><img src={JavaScript} /><p>JS</p></li>
                  <li><img src={ReactSkill} /><p>ReactJS</p></li>
                  <li><img src={Python} /><p>Python</p></li>
                  <li><img src={NodeJS} /><p>NodeJS</p></li>
                  <li><img src={MySQL} /><p>MySQL</p></li>
                </ul>
              </div>
            </div>
            <div className="main__image">
              <div className="main__img">
                <img src={Picme} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
