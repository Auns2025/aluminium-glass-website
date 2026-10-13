import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f5f0] py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="flex flex-wrap items-center justify-center gap-x-[0.3em] text-4xl font-extrabold tracking-tight text-[#101214] md:text-5xl lg:text-6xl">
          <span>Ready</span>
          <span>to</span>
          <span>start</span>
          <span>your</span>
          <span className="bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] bg-clip-text text-transparent">
            project?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-[#252525]/80">
          Let&apos;s talk about your glass and aluminium project. No pressure, just a conversation about what&apos;s possible.
        </p>

        <div className="mt-10">
          <div className="inline-block rounded-full bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] p-[2px]">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f7f5f0] px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#101214] transition-colors duration-200 hover:bg-[#101214] hover:text-[#f7f5f0]"
            >
              Talk to Us

              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Contact Links */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          {/* Email */}
          <a
            href="mailto:info@aluminiumglass.com"
            className="group flex items-center gap-2 text-sm text-neutral-700/75 transition-colors hover:text-[#d9b66e]"
          >
            <Mail className="h-4 w-4 text-[#d9b66e]" />

            <span className="font-semibold">
             amaluminumglassdubai@gmail.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+923001234567"
            className="group flex items-center gap-2 text-sm text-neutral-700/75 transition-colors hover:text-[#d9b66e]"
          >
            <Phone className="h-4 w-4 text-[#d9b66e]" />

            <span className="font-semibold">
              +971549982498
            </span>
          </a>

          {/* Website */}
          <a
            href="/"
            className="group flex items-center gap-2 text-sm text-neutral-700/75 transition-colors hover:text-[#d9b66e]"
          >
            <Globe className="h-4 w-4 text-[#d9b66e]" />

            <span className="font-semibold">
              Aluminium &amp; Glass
            </span>
          </a>
        </div>

        {/* Address */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-neutral-700/75">
          <MapPin className="h-3 w-3 shrink-0" />

          <span>
            UNITED ARAB EMIRATES DUBAI
          </span>
        </div>
      </div>

      {/* Background Glow - Updated to theme gold colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "linear-gradient(90deg, #a87830, #d9b66e, #b8893e)",
        }}
      />
    </section>
  );
};

export default ContactCTA;