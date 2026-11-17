"use client";

import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "For Teams", href: "#teams" },
  { label: "Community", href: "#community" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) return;

      if (
        !mobileNavRef.current?.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const focusStyles =
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Luma home"
          onClick={closeMenu}
          className={`text-xl font-extrabold tracking-tight ${focusStyles}`}
        >
          luma.
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm text-foreground/70 transition-colors hover:text-primary ${focusStyles}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${focusStyles}`}
          >
            Log in
          </a>

          <a
            href="#courses"
            className={`inline-flex min-h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover ${focusStyles}`}
          >
            Start learning
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden ${focusStyles}`}
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          ref={mobileNavRef}
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-background px-6 py-6 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={`text-base font-medium transition-colors hover:text-primary ${focusStyles}`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className={`text-base font-medium transition-colors hover:text-primary ${focusStyles}`}
            >
              Log in
            </a>

            <a
              href="#courses"
              onClick={closeMenu}
              className={`inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover ${focusStyles}`}
            >
              Start learning
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
