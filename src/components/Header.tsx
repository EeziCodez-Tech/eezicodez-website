'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import ScopingModal from './ScopingModal';
import { Icon } from './ui/Icon';


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scopingOpen, setScopingOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Venture Lab', path: '/venture-lab' },
  ];

  // isHomePage determines hero darkness: home hero is always dark, sub-pages are light in light mode
  const isHomePage = pathname === '/';

  // Logo filter: white on dark hero (dark mode or initial load before hydration)
  const logoFilter = (theme === 'dark') || (!scrolled && theme !== 'light')
    ? 'brightness(0) invert(1)'
    : 'none'; // dark logo on white hero in light mode

  return (
    <>
      <header className={`main-header-premium ${scrolled ? 'scrolled' : ''}`} data-subpage={!isHomePage ? 'true' : undefined}>
        <div className="header-inner">
          <Link href="/" className="nav-logo z-50 relative">
            <Image
              src="/images/Official%20logo.svg"
              alt="EeziCodez Tech"
              width={100}
              height={32}
              style={{ height: '28px', filter: logoFilter, width: 'auto', transition: 'filter 0.3s ease' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="nav-list-premium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className={`nav-link-v2 ${pathname === link.path || (link.path !== '/' && pathname.includes(link.path)) ? 'active' : ''}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
              <li>
                <button onClick={() => setScopingOpen(true)} className="btn-nav-premium">
                  Schedule a Call
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile: Simple Logo + Theme Toggle (No Hamburger) */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Premium Mobile Bottom Navigation (Tab Bar) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] !px-3 !pb-6 !pt-4 bg-[var(--surface-primary)]/80 backdrop-blur-xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] flex justify-center">
        <div className="flex justify-around items-center w-full max-w-lg mx-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            // Map icons based on link name
            const getIcon = (name: string) => {
              const commonProps = {
                size: 'sm' as const,
                strokeWidth: 2,
                fill: isActive ? "currentColor" : "none"
              };

              switch (name) {
                case 'Home':
                  return (
                    <Icon {...commonProps}>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </Icon>
                  );
                case 'Capabilities':
                  return (
                    <Icon {...commonProps}>
                      <rect x="3" y="3" width="7" height="7"></rect>
                      <rect x="14" y="3" width="7" height="7"></rect>
                      <rect x="14" y="14" width="7" height="7"></rect>
                      <rect x="3" y="14" width="7" height="7"></rect>
                    </Icon>
                  );
                case 'Case Studies':
                  return (
                    <Icon {...commonProps}>
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </Icon>
                  );
                case 'Venture Lab':
                  return (
                    <Icon {...commonProps} path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  );
                default:
                  return null;
              }
            };

            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? 'text-[var(--brand-blue)] scale-110' : 'text-[var(--ink)] opacity-50'}`}
              >
                <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-[var(--brand-blue)]/10' : ''}`}>
                  {getIcon(link.name)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">{link.name.split(' ')[0]}</span>
              </Link>
            );
          })}

          {/* 5th Item: Schedule / Book */}
          <button
            onClick={() => setScopingOpen(true)}
            className="mobile-nav-schedule flex flex-col items-center gap-1.5 transition-all duration-300"
          >
            <div className="mobile-nav-schedule-icon">
              <Icon size="sm">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
              </Icon>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Book</span>
          </button>
        </div>
      </nav>

      {/* Project Scoping Modal */}
      <ScopingModal isOpen={scopingOpen} onClose={() => setScopingOpen(false)} />
    </>
  );
}
