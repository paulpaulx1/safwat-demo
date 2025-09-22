// src/components/Navigation/Navigation.js
'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#social', label: 'Social' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo/Brand */}
          <div className={styles.brand}>
            <a href="#home" className={styles.brandLink} onClick={closeMenu}>
              <span className={styles.brandText}>SR</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuToggle} ${isOpen ? styles.menuOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.overlayOpen : ''}`}>
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuHeader}>
              <span className={styles.mobileMenuTitle}>Menu</span>
              <button
                className={styles.closeButton}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.mobileMenuItems}>
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}