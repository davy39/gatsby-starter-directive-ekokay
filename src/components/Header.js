import React from 'react';
import config from '../../config';
import certif from '../assets/images/certif.jpg';
export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-home"></span>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <span className="image">
        <img src={certif} width="200" height="133" alt="" />
      </span>
    </div>
  );
}
