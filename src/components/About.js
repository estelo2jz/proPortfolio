import React, { Component } from 'react';
import Picme from "../logo/pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="main__section" id="about">
        <div className="main__container">
          <h1>Hello, I'm Estelo!</h1>
          <div className="main__content">
            <div className="main__text">
              <h2>I'm a Front-End Web Developer currently living in Beach Park, Illinois.</h2>
              <p>
                I like to code starting from scratch, and see where it leads me. 
                I like to animate things and bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful user experience.
              </p>
            </div>
            <div className="main__image">
              <img src={Picme} alt="logo" className="main__img" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
