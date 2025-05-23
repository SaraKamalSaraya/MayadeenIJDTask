"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import accountIcon from '@/assets/images/icons/account.svg';
import searchIcon from '@/assets/images/icons/search.svg';
import { navLinks } from '@/constants/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userLinks = [
    { href: "/account", label: "حسابي", icon: accountIcon },
    { href: "/search", label: "بحث...", icon: searchIcon },
  ];

  return (
    <header className="bg-primary text-white py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center ml-8">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Mayadeen Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center mr-8 md:mr-0 md:ml-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-white hover:text-secondary whitespace-nowrap ml-6 flex items-center"
              >
                {link.label}
                {link.hasPlus && <span className="text-secondary mr-1">+</span>}
              </Link>
            ))}
          </nav>
        </div>

        {/* User actions */}
        <div className="hidden md:flex items-center">
          {userLinks.reverse().map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="flex items-center gap-2 text-white hover:text-secondary ml-6"
            >
              <Image
                src={link.icon}
                alt={`${link.label} icon`}
                width={16}
                height={16}
                className="h-4 w-4"
                priority
              />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {userLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-white hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-white hover:text-secondary"
              >
                {link.label}
                {link.hasPlus && <span className="text-secondary mr-1">+</span>}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 