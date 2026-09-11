import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Phone, X, Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/contact");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-[16px] md:top-[24px] left-1/2 z-50 w-full max-w-[min(100vw-2rem,36rem)] -translate-x-1/2 px-4 md:max-w-[min(100vw-3rem,56rem)] animate-fade-in-up">
        <div className="relative flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-neutral-950/60 p-1.5 shadow-[0_14px_45px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-2xl transition-all duration-300 hover:border-white/30">
          {/* Glass Highlight */}
          <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
          <div className="pointer-events-none absolute -top-4 left-8 h-8 w-40 rounded-full bg-[#f5b041]/15 blur-lg" />

          {/* Logo */}
          <Link
  to="/"
  aria-label="Aluminium & Glass"
  className="group relative z-10 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-neutral-900 text-white p-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all hover:border-[#f5b041]/60 hover:scale-105"
>
  <img 
    src="/images/logo.jpg" 
    alt="Aluminium & Glass Logo" 
    className="h-full w-full object-cover"
  />
</Link>

          {/* Mobile Text */}
          <div className="relative z-10 flex h-10 min-w-0 flex-1 items-center justify-center overflow-hidden md:hidden">
            <Link to="/" className="truncate px-1 text-center text-xs font-bold text-white sm:text-sm tracking-wide">
              Aluminium & Glass
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden min-w-0 flex-1 items-center justify-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-semibold transition-all duration-200 tracking-wide underline-offset-4 hover:text-[#f5b041] ${
                    isActive ? "text-[#f5b041] drop-shadow-[0_0_8px_rgba(245,176,65,0.5)] font-bold" : "text-white/85"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Quote Button */}
          <button
            type="button"
            onClick={handleQuote}
            aria-label="Get a quote"
            title="Get a Quote"
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f5b041]/60 bg-[#f5b041] text-black shadow-[0_4px_15px_rgba(245,176,65,0.35)] transition-all hover:scale-105 hover:bg-[#e09e35] cursor-pointer"
          >
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
          </button>

          {/* Phone */}
          <a
            href="tel:+923001234567"
            aria-label="Call Us"
            title="Call Us"
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-neutral-900/80 text-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-all hover:border-white/40 hover:scale-105"
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-all hover:bg-neutral-800 md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" strokeWidth={2.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-neutral-900 text-[#f5b041]"
                        : "text-neutral-800 hover:bg-neutral-100"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-100 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/contact");
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#f5b041] text-black font-semibold text-sm flex items-center justify-center gap-2"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+923001234567"
                className="p-3 rounded-full bg-neutral-900 text-white flex items-center justify-center"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

