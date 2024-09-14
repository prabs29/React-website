import React from 'react'

import img1 from '../../images/img-1.jpg';

export default function Products() {
    return (
      <div 
        className="products" 
        style={{ backgroundImage: `url(${img1})` }} // Inline style using imported image
      >
        Products
      </div>
    );
  }