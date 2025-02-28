import React from "react";
import footer_logo from "../../../assets/images/footer_logo.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-3 py-5">
      <div>
        <div>
          <img
            src={footer_logo}
            alt="footer_logo"
            className="w-full h-12 object-contain"
          />
        </div>
        <div className="shadow-md border border-slate-300 rounded-md mt-5 p-3">
          <div className="flex flex-wrap gap-4">
            <div className="text-xs">About Us</div>
            <div className="text-xs">Create Your Own Ad</div>
            <div className="text-xs">Term Of Use</div>
            <div className="text-xs">Privacy Policy</div>
            <div className="text-xs">Advertise With Us</div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-lg font-bold text-center">
          Living and Entertainment
        </div>
        <div className="shadow-md border border-slate-300 rounded-md mt-5 p-3">
          <div className="flex flex-wrap gap-4">
            <div className="text-xs">About Us</div>
            <div className="text-xs">Create Your Own Ad</div>
            <div className="text-xs">Term Of Use</div>
            <div className="text-xs">Privacy Policy</div>
            <div className="text-xs">Advertise With Us</div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-lg font-bold text-center">Services</div>
        <div className="shadow-md border border-slate-300 rounded-md mt-5 p-3">
          <div className="flex flex-wrap gap-4">
            <div className="text-xs">About Us</div>
            <div className="text-xs">Create Your Own Ad</div>
            <div className="text-xs">Term Of Use</div>
            <div className="text-xs">Privacy Policy</div>
            <div className="text-xs">Advertise With Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
