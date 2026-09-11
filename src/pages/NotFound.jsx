import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-8xl font-black text-[#f5b041] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 text-sm leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5b041] text-black font-semibold text-sm rounded-full shadow hover:bg-[#e09e35] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-semibold text-sm rounded-full shadow hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
