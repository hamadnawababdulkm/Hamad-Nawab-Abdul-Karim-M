import React from 'react';
import { Button } from '@/src/components/ui/button.tsx';

interface NavbarProps {
  onCtaClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body relative z-20 shrink-0">
      {/* Left: Logo text ✦ Nexora */}
      <a
        href="#"
        className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-1.5 transition-opacity hover:opacity-90"
      >
        <span>✦</span>
        <span>Nexora</span>
      </a>

      {/* Right container */}
      <div className="flex items-center gap-8">
        {/* Nav links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a
            href="#home"
            className="hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a
            href="#pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* CTA button: rounded-full px-5 text-sm font-medium using primary styling */}
        <Button
          onClick={onCtaClick}
          className="rounded-full px-5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 shadow-sm"
        >
          Book a demo
        </Button>
      </div>
    </nav>
  );
};
