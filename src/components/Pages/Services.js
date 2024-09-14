import React from 'react'

import img3 from '../../images/img-3.jpg';

export default function Services() {
    return (
      <div 
        className="services" 
        style={{ backgroundImage: `url(${img3})` }} // Inline style using imported image
      >
        SERVICES
      </div>
    );
  }