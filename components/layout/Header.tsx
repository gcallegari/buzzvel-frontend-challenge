
"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#teams" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight"
          aria-label="Luma home"
        >
          luma.
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Log in
          </a>

          <a
            href="#courses"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Start learning
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
        >
          <span aria-hidden="true" className="text-2xl">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-border bg-background px-6 py-6 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-medium"
            >
              Log in
            </a>

            <a
              href="#courses"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md bg-primary px-5 py-3 text-center font-semibold text-white"
            >
              Start learning
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
