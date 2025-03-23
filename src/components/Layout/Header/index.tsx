"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 20);
    const handleClickOutside = (event: MouseEvent) => {
      if (signInRef.current && !signInRef.current.contains(event.target as Node)) setIsSignInOpen(false);
      if (signUpRef.current && !signUpRef.current.contains(event.target as Node)) setIsSignUpOpen(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) setNavbarOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${sticky ? "shadow-md bg-white dark:bg-gray-800 py-4" : "py-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 lg:max-w-screen-xl">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsSignInOpen(true)} className="hidden lg:block px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
            Sign In
          </button>
          <button onClick={() => setIsSignUpOpen(true)} className="hidden lg:block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            Sign Up
          </button>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setNavbarOpen(!navbarOpen)} className="lg:hidden text-gray-700 dark:text-white">
            <Icon icon="mdi:menu" width={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {navbarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setNavbarOpen(false)} />
      )}
      <aside ref={mobileMenuRef} className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transition-transform transform ${navbarOpen ? "translate-x-0" : "translate-x-full"} z-50 p-6`}> 
        <button onClick={() => setNavbarOpen(false)} className="absolute top-4 right-4 text-gray-700 dark:text-white">
          <Icon icon="mdi:close" width={24} />
        </button>
        <nav className="flex flex-col space-y-4 mt-8">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <button onClick={() => setIsSignInOpen(true)} className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
            Sign In
          </button>
          <button onClick={() => setIsSignUpOpen(true)} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            Sign Up
          </button>
        </nav>
      </aside>

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={signInRef} className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <button onClick={() => setIsSignInOpen(false)} className="absolute top-2 right-2 text-gray-700 dark:text-white">
              <Icon icon="mdi:close" width={24} />
            </button>
            <Signin />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={signUpRef} className="relative bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
            <button onClick={() => setIsSignUpOpen(false)} className="absolute top-2 right-2 text-gray-700 dark:text-white">
              <Icon icon="mdi:close" width={24} />
            </button>
            <SignUp />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;