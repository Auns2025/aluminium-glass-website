import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';

const MobileActionBar = () => {
  return (
    <aside 
      aria-label="Quick mobile contact actions"
      className="fixed bottom-0 inset-x-0 z-40 block md:hidden bg-[#101214]/95 backdrop-blur-xl border-t border-white/15 px-3 py-2.5 shadow-[0_-8px_25px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Action 1: WhatsApp (min-h: 48px touch target) */}
        <a
          href="https://wa.me/971549982498"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Action 2: Direct Call (min-h: 48px touch target) */}
        <a
          href="tel:+971549982498"
          aria-label="Call AM Glass Aluminium"
          className="flex-1 flex items-center justify-center gap-1.5 h-12 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-[#f7f5f0] border border-white/15 font-bold text-xs uppercase tracking-wider transition-all"
        >
          <Phone className="w-4 h-4 text-[#d9b66e]" />
          <span>Call Us</span>
        </a>

        {/* Action 3: Request Quote (min-h: 48px touch target) */}
        <Link
          to="/contact"
          aria-label="Request a Quote"
          className="flex-[1.2] flex items-center justify-center gap-1.5 h-12 rounded-xl bg-gradient-to-r from-[#a87830] via-[#d9b66e] to-[#b8893e] active:scale-95 text-[#101214] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
        >
          <span>Quote</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </Link>

      </div>
    </aside>
  );
};

export default MobileActionBar;
