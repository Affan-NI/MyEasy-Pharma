import React, { useState } from 'react';
import { 
  Utensils, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Scale, 
  Stethoscope,
  ChevronRight,
  Apple,
  Zap,
  Flame,
  Wine
} from 'lucide-react';

const Nutrition = () => {
  const [selected, setSelected] = useState(0);

  const focusAreas = [
    {
      area: "Meal Timing",
      monitor: "Eating regularity",
      params: "Meal gaps, late meals",
      impact: "Prevents glucose swings",
      icon: <Clock className="w-5 h-5" />
    },
    {
      area: "Carbohydrate Intake",
      monitor: "Carb type & load",
      params: "Simple vs complex carbs",
      impact: "Better glycaemic control",
      icon: <Zap className="w-5 h-5" />
    },
    {
      area: "Food Quality",
      monitor: "Processed food index",
      params: "Ultra-processed frequency",
      impact: "Lowers inflammation risk",
      icon: <Apple className="w-5 h-5" />
    },
    {
      area: "Portion Behaviour",
      monitor: "Over/under eating",
      params: "Portion deviation",
      impact: "Reduces insulin mismatch",
      icon: <Scale className="w-5 h-5" />
    },
    {
      area: "Alcohol Impact",
      monitor: "Timing & quantity",
      params: "Alcohol-linked events",
      impact: "Hypoglycaemia prevention",
      icon: <Wine className="w-5 h-5" />
    },
    {
      area: "Nutrition Scoring",
      monitor: "Diet risk score",
      params: "Composite food behaviour",
      impact: "Personalised diet insights",
      icon: <Flame className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-2/3 md:h-2/3 bg-[#f0f4f8] font-sans text-slate-800 p-2 md:p-4 flex justify-center items-center overflow-hidden">
      {/* Container - Fixed height for single screen view */}
      <div className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col shadow-lg h-full max-h-[92vh] md:max-h-[85vh]">
        
        {/* Header - Compact Darker Medical Theme */}
        <div className="bg-slate-900 p-3 md:p-4 text-white shrink-0">
          <div className="flex items-center gap-2 mb-0.5">
            <Stethoscope className="w-4 h-4 text-cyan-400 opacity-90" />
            <span className="text-[7px] md:text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400">Precision Nutrition Intelligence</span>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-lg md:text-2xl font-black leading-tight">Nutrition <span className="text-cyan-400 italic">Protocol</span></h1>
              <p className="text-slate-400 text-[9px] md:text-xs max-w-xl hidden md:block leading-tight font-medium">
                Strategic nutritional tracking for metabolic stability and long-term health.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end">
               <span className="text-[10px] font-bold text-slate-500 uppercase">MyEasy Pharma</span>
               <div className="h-1 w-20 bg-cyan-500/30 rounded-full mt-1">
                  <div className="h-full w-2/3 bg-cyan-500 rounded-full"></div>
               </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          
          {/* Navigation - Horizontal on mobile, Sidebar on desktop */}
          <div className="w-full md:w-[280px] bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-2 md:p-3 space-y-1 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-2 md:gap-0 no-scrollbar shrink-0">
            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex-shrink-0 md:flex-shrink-1 w-[160px] md:w-full flex items-center justify-between p-2 md:p-2.5 rounded-lg transition-all text-left group ${
                  selected === index 
                  ? 'bg-cyan-600 text-white shadow-md' 
                  : 'bg-white md:bg-transparent hover:bg-slate-200 text-slate-600 border border-slate-200 md:border-0'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md transition-colors ${selected === index ? 'bg-cyan-500/50' : 'bg-cyan-50 text-cyan-600'}`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] md:text-xs font-bold truncate">{item.area}</span>
                </div>
                <ChevronRight className={`hidden md:block w-3 h-3 transition-transform ${selected === index ? 'rotate-90' : 'opacity-30'}`} />
              </button>
            ))}
          </div>

          {/* Details Area - Optimized Padding */}
          <div className="w-full md:flex-1 p-4 md:p-6 flex flex-col justify-center bg-white relative overflow-y-auto">
            <div className="animate-in fade-in slide-in-from-bottom-2 md:slide-in-from-right-2 duration-300">
              
              {/* Focus Info Title */}
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 shadow-sm shrink-0">
                  {React.cloneElement(focusAreas[selected].icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div>
                  <h2 className="text-base md:text-xl font-black text-slate-800 leading-tight">{focusAreas[selected].area}</h2>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-cyan-500"></span>
                    </span>
                    <p className="text-cyan-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest font-mono">Real-time Analysis</p>
                  </div>
                </div>
              </div>

              {/* Data Grid - More compact spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-xl">
                  <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Monitoring Focus</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-tight">{focusAreas[selected].monitor}</p>
                </div>
                
                <div className="p-3 border border-slate-100 bg-slate-50/50 rounded-xl">
                  <p className="text-[7px] md:text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Key Parameters</p>
                  <p className="text-xs md:text-sm font-bold text-slate-700 leading-tight">{focusAreas[selected].params}</p>
                </div>
              </div>

              {/* Impact Box - Highlighted Section */}
              <div className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl relative overflow-hidden group shadow-md">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[8px] md:text-[9px] font-bold text-cyan-400/70 uppercase tracking-widest">Therapeutic Impact</span>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-white leading-tight">
                    {focusAreas[selected].impact}
                  </p>
                </div>
                <Utensils className="absolute -right-2 -bottom-2 w-16 h-16 md:w-20 md:h-20 text-white/5 -rotate-12" />
              </div>

              <div className="mt-4 flex items-center gap-2 text-slate-400 italic text-[8px] md:text-[9px]">
                <Activity className="w-3 h-3" />
                <span>Precision adjustments based on biometric feedback.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;