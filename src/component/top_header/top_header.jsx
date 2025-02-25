import React from "react";
import top_logo from "../../assets/images/top_logo.jpg";
import flag from "../../assets/images/flag.jpg";
import usaflag from "../../assets/images/usa.jpg";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const TopHeader = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-between items-center border border-t-black border-b-black">
        <Menu
          as="div"
          className="relative border border-e-black xs:border-e-none"
        >
          <div>
            <MenuButton className="inline-flex justify-center items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-900">
              <div className="flex gap-2 items-center">
                <span className="text-xs">EDITION</span>
                <div className="flex gap-1 items-center">
                  <img src={flag} alt="flag" className="h-3 w-5 object-cover" />
                  IN
                </div>
              </div>
              <ChevronDownIcon className="size-5 text-gray-400" />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute left-0 top-10 z-10 bg-white p-3 w-24 rounded-md shadow-md"
          >
            <div className="py-1">
              <MenuItem>
                <div className="flex gap-1 items-center cursor-pointer">
                  <img src={flag} alt="flag" className="h-3 w-5 object-cover" />
                  IN
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex gap-1 items-center cursor-pointer">
                  <img
                    src={usaflag}
                    alt="flag"
                    className="h-3 w-5 object-cover"
                  />
                  US
                </div>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <div className="flex flex-wrap gap-2 items-center text-xs text-slate-500 p-2 border border-e-black">
          <div>TUE, FEB 25, 2025 | UPDATED 04.29PM</div>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            DELHI{" "}
            <span className="font-bold">
              26
              <sup>0</sup>
            </span>
            C
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <button className="border border-red-600 text-red-600 px-5 py-1 text-xs sm:text-sm font-medium rounded-md">
            READ E PAPER
          </button>
          <button className="bg-red-600 text-white px-5 py-1 text-xs sm:text-sm font-medium rounded-md">
            SUBSCRIBE TO TOI
          </button>
          <button className="text-xs sm:text-sm">SIGN IN</button>
          <div className="flex gap-2 sm:gap-3 items-center">
            <div className="border border-black p-2 rounded-full">
              <FaFacebookF className="text-xs sm:text-sm" />
            </div>
            <div className="border border-black p-2 rounded-full">
              <FaXTwitter className="text-xs sm:text-sm" />
            </div>
            <div className="border border-red-500 p-2 rounded-full">
              <FaYoutube className="text-xs sm:text-sm text-red-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-2">
        <img
          src={top_logo}
          alt="top_logo"
          className="w-full max-w-xs sm:max-w-md h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default TopHeader;
