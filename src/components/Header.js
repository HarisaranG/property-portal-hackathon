import React, { useState } from "react";

function Header() {
  const [curentPage, setCurentPage] = useState(
    window.location.href.split("3000/")[1] || window.location.href.split("live/")[1]
  );

  console.log(window.location.href.split("3001/")[1])

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-main">
      <h2 className="title-text">Property Portal</h2>
      <div className="navbarr">
        <a
          className={
            (curentPage == "rental" ? "active-tab " : "") + "rental-button"
          }
          href="/rental"
        >
          Rental
        </a>
        <a
          className={
            (curentPage == "sale" ? "active-tab " : "") + "sale-button"
          }
          href="/sale"
        >
          Sale
        </a>
      </div>
    </div>
  );
}

export default Header;