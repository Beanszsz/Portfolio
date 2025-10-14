"use client";
import React, { useState } from "react";
import "./navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About.Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">Beans</span>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
        <ul className={`navbar-menu${menuOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href} className="navbar-item">
              <a
                href={item.href}
                className="navbar-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
