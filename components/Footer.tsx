
import React from 'react';
import { LinkedInIcon, YouTubeIcon, GitHubIcon } from './icons';

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: LinkedInIcon },
  { name: 'YouTube', href: '#', icon: YouTubeIcon },
  { name: 'GitHub', href: '#', icon: GitHubIcon },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-sm text-slate-400">
          © {currentYear} ElevatED Automotive Solutions LLC. All rights reserved.
        </div>
        <div className="flex items-center gap-4" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
