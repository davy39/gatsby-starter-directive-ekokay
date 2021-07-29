import React from 'react';
import config from '../../config';
import certif from '../assets/images/certif.jpg';
export default function Header() {
  return (
    <div id="header">
      <span className="logo icon fa-home"></span>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <p>
        <img src={certif} width="200" height="133" alt="" style="vertical-align:middle;margin:100px 0px"/>
      </p>
    </div>
  );
}
