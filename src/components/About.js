import React, { Component } from 'react';
import Picme from "../images/me.jpg";

import HTML from '../logo/skills/html-5.svg'
import CSS from '../logo/skills/css.svg';
import SCSS from '../logo/skills/sass.svg';
import JavaScript from '../logo/skills/javascript.svg';
import Python from '../logo/skills/python.svg';
import ReactSkill from '../logo/skills/react.svg';
import NodeJS from '../logo/skills/nodejs.svg';
import MySQL from '../logo/skills/mysql.svg';
import MongoDB from '../logo/skills/mongo.png';
import FirebaseLogo from '../logo/skills/firebase.png';
import VueLogo from '../logo/skills/vue.png';

export default class About extends Component {
  render() {
    return (
      <div className="main__section" id="about">
        <div className="main__container">
          <h1>Hello, I'm Estelo!</h1>
          <div className="main__content">
            <div className="main__text">
              <h2>I'm a Front-End Developer currently living in Beach Park Illinois.</h2>
              <p>
                Proficient in React and Firebase.
              </p>
              {/* <p>
                I like to code starting from scratch, and see where it leads me. 
                I like to animate things and bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful user experience.
              </p> */}
              <div className="main__skills-container">
                <ul className="main__skills-horizontal">
                  {/* <li><img src={MongoDB} /></li> */}
                  <li><img src={FirebaseLogo} /></li>
                  <li><img src={HTML} /></li>
                  <li><img src={CSS} /></li>
                  <li><img src={SCSS} /></li>
                  <li><img src={JavaScript} /></li>
                  <li><img src={VueLogo} /></li>
                  <li><img src={ReactSkill} /></li>
                  <li><img src={Python} /></li>
                  <li><img src={NodeJS} /></li>
                  {/* <li><img src={MySQL} /><p>MySQL</p></li> */}
                </ul>
              </div>
            </div>
            {/* <div className="main__image">
              <div className="main__img">
                <img src={Picme} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}
