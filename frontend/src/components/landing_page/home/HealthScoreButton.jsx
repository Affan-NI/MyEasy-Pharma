import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const NavigateButton = ({ onClick }) => {
  return (
    <div className="w-full flex items-center justify-center py-12 px-4 bg-transparent">
      {/* Container div with relative positioning for the glow effect */}
      <div className="relative group">
        
        {/* Animated Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        {/* Main Button */}
        <button 
          onClick={onClick}
          className="relative flex items-center gap-3 bg-[#f06529] hover:bg-[#d9541e] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 transform group-hover:-translate-y-1.5 group-active:translate-y-0 shadow-2xl shadow-orange-500/20"
        >
          <span className="flex items-center gap-2">
            Calculate Health Score
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
          </span>
          
          {/* Decorative Sparkle for extra flair on hover */}
          <Sparkles 
            size={20} 
            className="absolute -top-2 -right-2 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12" 
          />
        </button>

        {/* Custom Animation Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes tilt {
            0%, 50%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(0.5deg); }
            75% { transform: rotate(-0.5deg); }
          }
          .animate-tilt {
            animation: tilt 10s infinite linear;
          }
        `}} />
      </div>
    </div>
  );
};

export default NavigateButton;