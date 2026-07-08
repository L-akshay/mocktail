"use client";

import "../lib/registerGsap.js";
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';

import { navLinks } from '../../constants/index.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.fromTo(
      'nav',
      { backgroundColor: 'transparent' },
      {
        backgroundColor: '#00000090',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  });

  return (
    <nav className="nav-root">
      <div className="nav-inner">
        <Link href="/" className="flex items-center gap-2 z-10" onClick={() => setMenuOpen(false)}>
          <img src="/images/logo.png" alt="logo" className="size-8" />
          <p>Velvet Pour</p>
        </Link>

        {/* Desktop menu */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`ham-line ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`ham-line ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`ham-line ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
