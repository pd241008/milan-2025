/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useState } from "react";
import {
  Home,
  Info,
  Calendar,
  Users,
  Briefcase,
  Ticket,
  Menu,
  X,
} from "lucide-react";

// Define the type for navigation items to satisfy TypeScript/linter
/**
 * @typedef {object} NavItem
 * @property {string} name - The display name of the link.
 * @property {string} path - The URL path for the link.
 * @property {React.ElementType} Icon - The Lucide React icon component.
 */

// Nav Items Array
const navItems = [
  { name: "Home", path: "/", Icon: Home },
  { name: "About", path: "/about", Icon: Info },
  { name: "Events", path: "/events", Icon: Calendar },
  { name: "Teams", path: "/teams", Icon: Users },
  { name: "Sponsorship", path: "/sponsorship", Icon: Briefcase },
  { name: "Tickets", path: "/ticketing", Icon: Ticket },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Explicitly defining the type of 'path' as string
  /**
   * @param {string} path
   * @returns {boolean}
   */
  const isActive = (path: string) => {
    // Check if running client-side
    if (typeof window === "undefined") return false;

    const currentPath = window.location.pathname;

    // Special handling: Home link is active only on '/'
    if (path === "/") return currentPath === "/";

    // For other links, check if the current path starts with the link's path
    return currentPath.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Home Link - Uses <a> tag */}
          <a
            href="/"
            className="text-3xl font-extrabold text-indigo-700">
            Milan <span className="text-pink-500">Fest</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((/** @type {NavItem} */ item) => (
              <a
                key={item.path}
                href={item.path}
                // Styling based on active state (Pill effect)
                className={`flex items-center px-4 py-2 text-sm font-semibold rounded-full transition duration-200 
                  ${
                    isActive(item.path)
                      ? "bg-pink-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700"
                  }`}>
                <item.Icon className="w-4 h-4 mr-1" />
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-indigo-600 hover:text-pink-500 p-2 rounded-full transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl py-2 border-t border-gray-100 absolute w-full left-0">
          {navItems.map((/** @type {NavItem} */ item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className={`block w-full text-left px-6 py-3 text-base font-medium transition duration-150 
                ${
                  isActive(item.path)
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                }`}>
              <item.Icon className="inline w-5 h-5 mr-3" />
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
