import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/icons/user.svg";
import heartIcon from "../../assets/icons/heart.svg";
import shoppingIcon from "../../assets/icons/shopping cart.svg";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Categories", href: "#", current: false },
  { name: "About Us", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-24 border-b-2 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  {/* logo */}
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-44 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-44 w-auto lg:block"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>

                  {/* navigation  */}
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 mt-[70px] ml-10">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? " bg-gray-900 text-white"
                              : " hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* search bar */}

                <span className=" p-input-icon-left hidden  lg:mr-14 lg:block ">
                  <i className="pi pi-search " />
                  <InputText
                    placeholder="Search"
                    className="h-10 "
                    style={{ backgroundColor: "#F6F6F6" }}
                  />
                </span>

                {/* icons */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* shopping icon */}
                  <button
                    to="#"
                    type="button"
                    className="flex rounded-lg h-10 w-10 mr-3  items-center justify-center bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                  >
                    <img
                      src={shoppingIcon}
                      className="h-6 w-6 rounded-full"
                      alt=""
                    />
                  </button>

                  {/* wishlist icon */}
                  <button
                    to="#"
                    type="button"
                    className="flex rounded-lg h-10 w-10 items-center justify-center bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800"
                  >
                    <img
                      src={heartIcon}
                      className="h-6 w-6 rounded-full"
                      alt=""
                    />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-lg h-10 w-10  items-center justify-center bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-6 w-6 rounded-full"
                          src={userIcon}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            {/* navigation mobile */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-800 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
