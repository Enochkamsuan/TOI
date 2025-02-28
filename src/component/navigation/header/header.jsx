import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/images/images.png";
import TopHeader from "../../top_header/top_header";
import { FaEllipsisH } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import top_logo from "../../../assets/images/top_logo.jpg";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Maha Kumbh Mela 2025", href: "#", current: true },
  { name: "Times Evoke", href: "#", current: false },
  { name: "Cancel Patiarchy", href: "#", current: false },
  { name: "Maharastra", href: "#", current: false },
  { name: "Delhi", href: "#", current: false },
  { name: "Manipur", href: "#", current: false },
  { name: "Nagaland", href: "#", current: false },
  { name: "Assam", href: "#", current: false },
];
const visibleItems = navigation.slice(0, 5);
const hiddenItems = navigation.slice(5);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="py-3">
      <div className="hidden lg:block">
        <TopHeader />
      </div>
      <div className="block lg:hidden">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={top_logo}
              alt="flag"
              className="w-full h-[27px] object-cover"
            />
          </div>
          <div className="flex gap-2">
            <div className="text-xs font-bold">TODAY'S E PAPER</div>
            <div>
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
      <Disclosure as="nav" className="bg-slate-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between sm:hidden">
            <div className="flex w-full justify-between items-center">
              <Link to="/">
                <div className="flex items-center">
                  <img alt="Your Company" src={logo} className="h-8 w-auto" />
                </div>
              </Link>
              <div className="flex items-center">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img alt="Your Company" src={logo} className="h-8 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {visibleItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current ? "text-black" : "hover:text-gray-500",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}

                {hiddenItems.length > 0 && (
                  <Menu as="div" className="relative">
                    <MenuButton className="flex items-center justify-center rounded-md px-3 py-2 text-gray-700 hover:text-gray-500">
                      <FaEllipsisH className="h-6 w-6" />
                    </MenuButton>
                    <MenuItems className="absolute left-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                      {hiddenItems.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <a
                              href="/"
                              to={item.href}
                              className={`block px-4 py-2 text-sm ${
                                active ? "bg-gray-100" : "text-gray-700"
                              }`}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </div>
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
