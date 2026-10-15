import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Globe,
  MessageSquare,
} from "lucide-react";
import { services } from "../data/services";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#101214] text-neutral-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Monogram - spans 4 columns on Desktop */}
          <div className="space-y-4 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="AM Glass Aluminium Logo"
                className="h-12 w-12 rounded-full object-cover border border-[#b8893e]/40"
              />
              <div>
                <span className="block font-display text-lg font-bold text-white tracking-wide">
                  AM Glass Aluminium
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#d9b66e]">
                  Architectural Glazing Dubai
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed !text-white max-w-sm">
  Specialized engineering and precision fabrication of architectural aluminium and glass systems for luxury villas, commercial towers, and institutional projects across Dubai and the UAE.
</p>

            {/* Approved Direct Links: WhatsApp, Call, Email */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/971549982498"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp AM Glass Aluminium"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#b8893e] hover:text-[#101214]"
              >
                <MessageSquare className="h-4 w-4" />
              </a>

              <a
                href="tel:+971549982498"
                aria-label="Call AM Glass Aluminium"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#b8893e] hover:text-[#101214]"
              >
                <Phone className="h-4 w-4" />
              </a>

              <a
                href="mailto:info@amglassaluminum.com"
                aria-label="Email AM Glass Aluminium"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#b8893e] hover:text-[#101214]"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href="https://amglassaluminium.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#b8893e] hover:text-[#101214]"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - spans 2 columns */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b66e]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All 10 Official Services - spans 3 columns */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b66e]">
              Official Services
            </h3>
            <ul className="space-y-2 grid grid-cols-1 gap-1">
              {services.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/services"
                    className="text-xs text-neutral-400 hover:text-white transition-colors block truncate"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - spans 3 columns */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d9b66e]">
              Dubai Head Office
            </h3>

            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#d9b66e] shrink-0 mt-0.5" />
                <span>
                  SHON BUSINESS PARK, ZONE 02 BUILDING, DUBAI INVESTMENT PARK (DIP), DUBAI, UAE
                </span>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-wider !text-white">
  Approved Phone Lines
</p>
                <a href="tel:+971526427235" className="block text-neutral-300 hover:text-[#d9b66e] transition-colors">
                  +971 52 642 7235
                </a>
                <a href="tel:+971549982498" className="block text-neutral-300 hover:text-[#d9b66e] transition-colors">
                  +971 54 998 2498
                </a>
                <a href="tel:+97142661822" className="block text-neutral-300 hover:text-[#d9b66e] transition-colors">
                  +971 4 266 1822
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1">
               <p className="text-[10px] font-bold uppercase tracking-wider !text-white">
  Direct Emails
</p>
                <a href="mailto:info@amglassaluminum.com" className="block text-neutral-300 hover:text-[#d9b66e] transition-colors break-all">
                  info@amglassaluminum.com
                </a>
                <a href="mailto:amaluminumglassdubai@gmail.com" className="block text-neutral-300 hover:text-[#d9b66e] transition-colors break-all">
                  amaluminumglassdubai@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101214] shadow-md transition-transform hover:scale-105"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Legal & Commercial Registration Footer Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center md:text-left space-y-1">
            <p className="!text-white">
  © {new Date().getFullYear()} AM Glass Aluminium. All rights reserved.
</p>
            {/* <p className="text-[11px] text-neutral-500">
              Legal Commercial Registration: <span className="text-neutral-400">Abdullah Mir Glass &amp; Aluminum Installation &amp; Maintenance L.L.C</span>
            </p> */}
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <Link to="/contact" className="hover:text-[#d9b66e] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#d9b66e] transition-colors">
              Terms of Service
            </Link>
            <a href="https://amglassaluminium.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9b66e] transition-colors">
              amglassaluminium.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;