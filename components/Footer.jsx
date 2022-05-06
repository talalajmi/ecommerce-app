import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Talal Al Ajmi All rights reserverd</p>
      <p className="icons">
        <Link href="https://www.instagram.com/talalajmi_">
          <AiFillInstagram />
        </Link>
        <Link href="https://www.twitter.com/talalajmi_">
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
