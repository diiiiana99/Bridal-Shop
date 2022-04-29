import React from "react";
import photos from "../../data";
import "./style.scss";

export default function Featured() {
  const [firstImage, secondImage, thirdImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>The Golden Goose</h6>
        <img className='img-1' src={secondImage} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>Lux Fine Jewelry</h6>
        <img src={firstImage} data-scroll/>
      </div>
    
    </section>
  );
}