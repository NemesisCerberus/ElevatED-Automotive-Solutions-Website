import React, { useState } from 'react';
import { MenuIcon, XIcon } from './icons';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/50 backdrop-blur-lg">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between" role="navigation" aria-label="Main">
          <a href="#" className="flex items-center">
            <img 
              src="/ElevatED White Background.png"
              alt="ElevatED Automotive Solutions Logo" 
              className="h-10 w-auto"
            />
          </a>
          <div className="flex flex-1 items-center justify-end">
            <nav className="hidden lg:flex lg:gap-x-8" aria-label="Desktop navigation">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-semibold leading-6 text-slate-300 hover:text-white">
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true" id="mobile-menu">
            <div className="fixed inset-0 z-20" />
            <div className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">ElevatED Automotive Solutions</span>
                  <img
                    className="h-10 w-auto"
                    src="/ElevatED White Background.png"
                    alt="ElevatED Automotive Solutions Logo"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-slate-300"
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

