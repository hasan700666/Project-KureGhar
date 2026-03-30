"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AuthContext, AuthInfo } from "../context/AuthContext";
import Image from "next/image";
import logo from '../../public/kureghar.png'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/foods", label: "Foods" },
  { href: "/gallery", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/review", label: "Review" },
  { href: "/find-us", label: "Find" },
  { href: "/contact-us", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  
  // Use useContext instead of the unstable `use()` hook
  const auth = useContext(AuthContext) as AuthInfo | null;
  const user = auth?.user;
  const singOut = auth?.singOut;

  return (
    <div className="navbar bg-base-100 shadow-sm forCss sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="text-center px-4 text-xl font-bold text-amber-400">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <button 
            onClick={singOut} 
            className="btn btn-outline btn-sm"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link href="/signin" className="btn btn-ghost btn-sm">
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="btn bg-amber-400 text-white btn-sm hover:bg-amber-500"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;