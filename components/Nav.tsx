"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const navItems = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "PORTFOLIO",
      link: "/portfolio",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className="
    transition-all duration-300
    group-data-[state=scrolled]:opacity-0
    group-data-[state=scrolled]:-translate-y-2
    group-data-[state=scrolled]:pointer-events-none
  "
            >
              BUTUH BANTUAN CEPAT ?
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="flex justify-center gap-2 items-center"
            >
              <MessageCircle className="w-5 h-5" />
              Konsultasi
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
              >
                BUTUH BANTUAN CEPAT ?
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return <></>;
};
