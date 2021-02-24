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
import DjangoLogo from '../logo/skills/django2.png';
import PythonLogo from '../logo/skills/python.png';
import HTMLLogo from '../logo/skills/html.png';
import ReactLogo from '../logo/skills/react.png';

export default class About extends Component {
  render() {
    return (
      <div className="main__section" id="about">
        <div className="main__container">
          <div className="main__header">
            <p>Hello, I'm Estelo!</p>
          </div>
          <div className="main__content">
            <div className="main__text">
              <h2>I'm a Front-End Developer currently living in Beach Park Illinois.</h2>
              <div className="main__info">
                <p>
                  Skills I'm currently learning and improving by building and redesigning personal projects.
                </p>
                <p>
                  Most of my projects are built on React framework, and now I am moving to React Native and to start building mobile applications.
                  I also have experience with Svelte, Ember, Vue, and Django frameworks.
                </p>
              </div>
              <div className="main__skills-container">
                <ul className="main__skills-horizontal">
                  <li><img src={MongoDB} alt="skill-img" /></li>
                  <li><img src={FirebaseLogo} alt="skill-img" /></li>
                  <li><img src={HTML} alt="skill-img" /></li>
                  <li><img src={CSS} alt="skill-img" /></li>
                  <li><img src={SCSS} alt="skill-img" /></li>
                  <li><img src={JavaScript} alt="skill-img" /></li>
                  <li><img src={ReactSkill} alt="skill-img" /></li>
                  <li><img src={Python} alt="skill-img" /></li>
                  <li><img src={NodeJS} alt="skill-img" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
