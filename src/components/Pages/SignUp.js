import React from 'react'

import img8 from '../../images/img-8.jpg';

export default function SignUp() {
    return (
      <div 
        className="sign-up" 
        style={{ backgroundImage: `url(${img8})` }} // Inline style using imported image
      >
        Sign Up
      </div>
    );
  }