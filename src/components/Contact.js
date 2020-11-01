import React, { Component } from 'react';
import { AiTwotoneMail } from 'react-icons/ai';


export default class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="contact__bar">
          <image>
            <AiTwotoneMail />
          </image>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.com" target="_blank">
            <p>Email</p>
          </a>
          <span>estelo2jz@gmail.com</span>
        </div>  
        <h1>Contact Me</h1>
      </div>
    )
  }
}
