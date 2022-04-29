import React from "react";
import "./style.scss";

export default function Navbar() {
  return (
    <div className="navbar" data-scroll-section >
       <a className='links' href='/'><div>menu</div></a>

      <a className='links' href='/'> <div>Pandora Bridal</div></a>

      <a className='links' href='/shop'><div>Shop</div></a>
    </div>
  );
}