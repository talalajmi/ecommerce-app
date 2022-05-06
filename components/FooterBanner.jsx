import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    desc,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3 className="left">{largeText1}</h3>
          <h3 className="left">{largeText2}</h3>
          <p className="left">{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <img src={urlFor(image)} className="footer-banner-image" />
      </div>
    </div>
  );
};

export default FooterBanner;
