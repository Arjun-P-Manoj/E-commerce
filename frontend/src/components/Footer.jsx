import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Forever is your go-to destination for the latest trends and timeless
            essentials. We are committed to providing high-quality products,
            seamless shopping, and exceptional customer service. Shop with
            confidence and style with Forever!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 94949-94949</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-sm text-center py-5">Copyright 2025@forever.com</p>
      </div>
    </div>
  );
};

export default Footer;
