// src/components/Navbar.tsx
import { FC } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NavbarProps } from '../types';

const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { user, isLoading } = useUser();

  return (
    <nav className={`bg-white shadow-lg ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </Link>

          {/* Right Side: Links and Sign in */}
          <div className="flex items-center justify-end space-x-5 w-full">
            {/* Links */}
            <div className="hidden md:flex md:space-x-5">
              <Link
                href="/library"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-black"
              >
                IELTS Exam Library
              </Link>
              <Link
                href="/tips"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-black"
              >
                IELTS Tips
              </Link>
              <Link
                href="/prep"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-black"
              >
                IELTS Prep
              </Link>
              <Link
                href="/sessions"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-black"
              >
                Live Sessions
              </Link>
              <Link
                href="/courses"
                className="hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium text-black"
              >
                IELTS Courses
              </Link>
            </div>

            {/* Sign in / Sign out Button */}
            {!isLoading && !user && (
              <Link
                href="/auth/login"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign in
              </Link>
            )}
            {!isLoading && user && (
              <Link
                href="/api/auth/logout"
                className="text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign out
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
