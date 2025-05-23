"use client"
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { navLinks, footerLinks } from '@/constants/navigation';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start py-8 md:py-12 px-4 md:px-8 gap-8">
        <div className="flex flex-col w-full md:w-auto">
          <div className="mb-6 flex items-center gap-12">
            <Link href="/">
              <Image
                src={logo}
                alt="Mayadeen Logo"
                width={200}
                height={40}
                className="h-14 w-auto"
                priority
              />
            </Link>
            <div className="flex gap-4">
              <Link href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12.031 2c1.212 0 5.392.175 7.387 5.271.656 1.638.5 4.428.371 6.687v.01c-.015.267-.03.52-.041.765a.44.44 0 00.307.45c.19.061.473.143.84.245 1.154.32 2.87.956 3.373 1.894.371.692.223 1.689-.872 2.36-.13.082-.272.16-.422.237-.536.278-1.347.698-1.56 1.273-.162.438-.03 1.086.752 2.22.804 1.165 2.5 3.063 5.553 3.063a.78.78 0 01.086 0c.223.01.446.02.648.02.371 0 .701.01 1.003.175.536.278.536.765.577 1.144.04.378.082 1.463-1.469 1.894-.742.206-1.422.237-2.01.267-.02 0-.04 0-.06.01-.742.04-1.598.113-2.607.556-1.01.453-2.01 1.36-3.332 1.36-.02 0-.03 0-.05 0-.773 0-1.484-.237-2.133-.237-.37 0-.741.03-1.112.092-.783.123-1.463.535-2.153.957-.958.587-1.947 1.195-3.45 1.195-.03 0-.051 0-.081 0-1.504 0-2.493-.608-3.45-1.195-.69-.422-1.371-.834-2.154-.957a5.36 5.36 0 00-1.112-.092c-.65 0-1.36.237-2.133.237-.02 0-.03 0-.05 0-1.32 0-2.322-.907-3.332-1.36-1.01-.443-1.865-.515-2.607-.556-.02-.01-.04-.01-.06-.01-.589-.03-1.27-.06-2.01-.267-1.551-.43-1.51-1.515-1.47-1.894.04-.38.04-.866.577-1.144.302-.165.632-.175 1.003-.175.202 0 .425-.01.648-.02a.78.78 0 01.086 0c3.053 0 4.75-1.898 5.553-3.063.783-1.134.914-1.782.753-2.22-.214-.575-1.025-.995-1.56-1.273-.15-.077-.293-.155-.423-.237-1.095-.67-1.243-1.668-.872-2.36.503-.938 2.22-1.575 3.373-1.894.367-.102.65-.184.84-.245a.44.44 0 00.307-.45c-.01-.245-.026-.498-.04-.765v-.01c-.13-2.26-.286-5.05.37-6.687C6.64 2.175 10.82 2 12.031 2z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </Link>
              <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M19.321 5.562a5.124 5.124 0 01-3.035-2.4 5.124 5.124 0 01-.436-1.306h-3.756v12.89c0 1.81-1.479 3.29-3.289 3.29-1.81 0-3.289-1.48-3.289-3.29s1.479-3.29 3.289-3.29c.304 0 .598.044.88.124v-3.8a7.057 7.057 0 00-.88-.055C4.641 7.725 1.5 10.867 1.5 14.75s3.141 7.026 7.024 7.026c3.883 0 7.024-3.142 7.024-7.026V9.474a8.444 8.444 0 004.773 1.488v-3.75a5.17 5.17 0 01-1 .35z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 md:mr-16 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gray-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto">
          <h3 className="text-lg font-medium mb-2">النشرة البريدية</h3>
          <p className="text-sm mb-4">النص أو الوصف يكتب هنا</p>
          <div className="flex w-full gap-1">
            <input
              type="email"
              placeholder="name@gmail.com"
              className="bg-white text-black px-4 py-2 rounded rounded-l-md w-full placeholder:text-sm placeholder:text-gray-200"
            />
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded rounded-r-md cursor-pointer">
              اشترك
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-2 px-4 md:px-8 text-xs gap-4 md:gap-0">
          <div className="text-gray-400">
            جميع الحقوق محفوظة
          </div>
          <div className="flex flex-wrap items-center space-x-2 justify-center">
            {footerLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-gray-300">
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-600 hidden md:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 