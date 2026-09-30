import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Clock,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Aluminium Windows",
    "Aluminium Doors",
    "Glass Doors",
    "Curtain Wall",
    "Glass Partitions",
    "Shower Enclosures",
  ];

  const workingHours = [
    { day: "Monday", time: "8 AM - 5 PM" },
    { day: "Tuesday", time: "8 AM - 5 PM" },
    { day: "Wednesday", time: "8 AM - 5 PM" },
    { day: "Thursday", time: "8 AM - 5 PM" },
    { day: "Friday", time: "8 AM - 5 PM" },
    { day: "Saturday", time: "8 AM - 5 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <footer className="bg-neutral-100 p-3 text-slate-300">
      <div className="flex justify-center">
        <div className="relative w-full max-w-[min(99vw,1800px)] overflow-hidden rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-black/5">

          {/* Main Footer */}
          <div className="relative z-10 flex min-h-[25rem] flex-col">

            {/* Footer Content */}
            <div className="flex-1 border-b border-white/10 px-5 pb-10 pt-10 sm:px-8 sm:pt-12 lg:px-12 lg:pt-14 xl:px-16">

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">

                {/* Company */}
                <div className="space-y-4 sm:col-span-2 lg:col-span-4">
                  <Link to="/" className="inline-flex items-center gap-2">
                    <img
                      src="/images/logo.jpg"
                      alt="Aluminium & Glass Logo"
                      className="h-10 w-auto object-contain"
                    />
                  </Link>

                  <p className="max-w-md text-sm leading-relaxed text-slate-300">
                    At Abdullah Mir Glass & Aluminium, we're dedicated to transforming
                    spaces with the beauty and functionality of glass and aluminium.
                    Our team brings expertise and care to every project, creating
                    customised solutions that reflect your vision and enhance your
                    surroundings.
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-1">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      <svg
                        className="h-5 w-5 fill-none stroke-current"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </a>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4 lg:col-span-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Quick Links
                  </h3>

                  <ul className="space-y-2.5">
                    {quickLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="group relative inline-block text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-4 lg:col-span-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Services
                  </h3>

                  <ul className="space-y-2.5">
                    {services.map((service) => (
                      <li key={service}>
                        <Link
                          to="/services"
                          className="group relative inline-block text-sm leading-snug text-slate-300 transition-colors duration-200 hover:text-white"
                        >
                          {service}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working Hours */}
                <div className="space-y-4 lg:col-span-2">
                  <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    <Clock className="h-3.5 w-3.5" />
                    Working Hours
                  </h3>

                  <ul className="space-y-2">
                    {workingHours.map((item) => (
                      <li
                        key={item.day}
                        className="flex items-center justify-between gap-3 text-xs leading-snug sm:text-sm"
                      >
                        <span className="text-slate-300">{item.day}</span>
                        <span
                          className={
                            item.time === "Closed"
                              ? "font-semibold text-red-400"
                              : "text-slate-400"
                          }
                        >
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4 sm:col-span-2 lg:col-span-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      Contact Us
                    </h3>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[2px] text-slate-500">
                      Aluminium & Glass
                    </p>
                  </div>

                  <div className="space-y-3.5">
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <span className="text-xs leading-snug text-slate-300 sm:text-sm">
                        SHON BUSINESS PARK,
                        <br />
                        ZONE 02 BUILDING, DUBAI INVESTMENT PARK (DIP) UNITED ARAB
                        EMIRATES DUBAI
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <Phone className="h-4 w-4 shrink-0 text-slate-300" />
                      <a
                        href="tel:+971526427235"
                        className="text-xs text-slate-300 transition-colors hover:text-white sm:text-sm"
                      >
                        +971526427235
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-2.5">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                      <a
                        href="mailto:amaluminumglassdubai@gmail.com"
                        className="break-all text-xs text-slate-300 transition-colors hover:text-white sm:text-sm"
                      >
                        amaluminumglassdubai@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Quote Button */}
                  <Link
                    to="/contact"
                    className="mt-1 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-200 hover:bg-neutral-200 hover:shadow-md"
                  >
                    Get Quote
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 px-5 py-6 sm:px-8 sm:py-7 lg:px-12 lg:py-8 xl:px-16">
              <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
                <p className="text-center text-xs text-slate-300 sm:text-sm md:text-left">
                  © {new Date().getFullYear()} Aluminium & Glass. All rights reserved.
                </p>

                <p className="text-center text-xs text-white/50 md:text-sm">
                  "Quality, precision, and design that lasts."
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end md:gap-4">
                  <Link
                    to="/contact"
                    className="text-xs text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                  >
                    Privacy
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs text-slate-300 transition-colors duration-200 hover:text-white sm:text-sm"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;