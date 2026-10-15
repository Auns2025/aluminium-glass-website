import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowUpRight, Phone, X, Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-[min(100vw-1.5rem,72rem)] -translate-x-1/2 md:top-6">
        <div className="relative flex items-center gap-3 rounded-full border border-[#d9d1c2] bg-[#f7f5f0]/90 px-2 py-1.5 shadow-[0_18px_40px_rgba(16,18,20,0.12)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-[1px] rounded-full bg-gradient-to-b from-white to-transparent" />

          <Link
            to="/"
            aria-label="AM Glass Aluminium Home"
            className="group relative z-10 flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#d8c8a6] bg-white transition-transform hover:scale-105"
          >
            <img src="/images/logo.jpg" alt="AM Glass Aluminium Logo" className="h-full w-full object-cover" />
          </Link>

          <div className="relative z-10 flex h-11 min-w-0 flex-1 items-center justify-center md:hidden">
            <Link to="/" className="truncate px-1 text-center text-[10px] font-bold tracking-[0.18em] text-[#101214] sm:text-xs">
              AM GLASS ALUMINIUM
            </Link>
          </div>

          <nav className="relative z-10 hidden min-w-0 flex-1 items-center justify-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap text-sm font-semibold tracking-[0.08em] uppercase transition-colors duration-200 ${
                    isActive ? "text-[#b8893e]" : "text-[#101214]/80 hover:text-[#101214]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              aria-label="Get a quote"
              title="Get a Quote"
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#b8893e]/70 bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] text-[#101214] shadow-[0_8px_24px_rgba(184,137,62,0.32)] transition-transform hover:scale-105 md:flex"
            >
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </button>

            <a
              href="tel:+971549982498"
              aria-label="Call Us"
              title="Call Us"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8d4cb] bg-[#101214] text-[#f7f5f0] transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d8d4cb] bg-[#101214] text-[#f7f5f0] transition-transform hover:scale-105 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-5 w-5" strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md px-6 pt-24 md:hidden">
          <div className="mx-auto w-full max-w-sm rounded-[1.75rem] bg-[#f7f5f0] p-6 shadow-2xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive ? "bg-[#101214] text-[#b8893e]" : "text-[#101214] hover:bg-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 flex gap-3 border-t border-[#e7e0d6] pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/contact");
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] px-4 py-3 text-sm font-semibold text-[#101214]"
              >
                <span>Get Quote</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+971549982498"
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#101214] text-[#f7f5f0]"
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