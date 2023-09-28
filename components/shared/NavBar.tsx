"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const pathname = usePathname();
  return (
    <nav className="py-4 px-4 md:px-16 flex items-center justify-between w-full absolute top-0 left-0 right-0 z-10 bg-transparent">
      <div className="flex gap-6">
        <Link href="/">
          <Image
            src="assets/unnLogo.svg"
            alt="UNN Logo"
            width={48}
            height={48}
          />
        </Link>
        <Link href="/">
          <Image
            src="assets/medicalLogo.svg"
            alt="Medical Logo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="hidden lg:flex gap-10 text-white text-xs items-center">
        {navBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`${
                isActive && "text-primary-green"
              } hover:text-primary-green`}
            >
              <p>{link.label}</p>
            </Link>
          );
        })}
        <button className="px-[18px] py-[11px] bg-primary-green text-white font-normal text-xs rounded-[5px]">
          Donate!
        </button>
      </div>
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <div></div> : <AiOutlineMenu size={20} color="white" />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        {nav ? (
          <div className="fixed right-16 top-8 lg:hidden" onClick={handleNav}>
            <AiOutlineClose size={20} />
          </div>
        ) : (
          <div></div>
        )}
        <h1 className="w-full text-3xl font-bold text-black m-4">MENU</h1>
        <ul className="uppercase p-4">
          {navBarLinks.map((link) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <li className="p-4 border-b border-gray-600">
                <Link
                  href={link.route}
                  key={link.label}
                  className={`${
                    isActive && "text-primary-green"
                  } hover:text-primary-green`}
                >
                  <p className="font-medium" onClick={handleNav}>
                    {link.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
