import React, { useState } from 'react';
import { 
  Utensils, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Scale, 
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
    <div className="min-h-2/3 md:h-2/3 bg-[#f8fafc] font-sans text-slate-800 p-2 md:p-4 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col shadow-lg h-full max-h-[92vh] md:max-h-[85vh]">
        
        {/* Header - Same structure as HeartCare */}
        <div className="bg-gradient-to-r from-cyan-600 to-slate-700 p-4 md:p-5 text-white shrink-0">
          <h1 className="text-xl md:text-3xl font-black mb-1">
            Nutrition <span className="text-cyan-100 italic">Protocol</span>
          </h1>
          <p className="text-cyan-50 text-[10px] md:text-xs max-w-2xl opacity-90 leading-tight font-medium">
            Strategic nutritional monitoring for metabolic stability and diabetes management.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          
          {/* Navigation - Same width behavior as HeartCare */}
          <div className="w-full md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-2 md:p-3 space-y-1 md:space-y-1.5 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-2 md:gap-0 no-scrollbar">
            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex-shrink-0 md:flex-shrink-1 w-[200px] md:w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl transition-all text-left group ${
                  selected === index 
                  ? 'bg-cyan-600 text-white shadow-md translate-x-0 md:translate-x-1' 
                  : 'bg-white md:bg-transparent hover:bg-slate-200 text-slate-700 border border-slate-200 md:border-0'
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`p-1 md:p-1.5 rounded-lg transition-colors ${
                    selected === index ? 'bg-cyan-500' : 'bg-cyan-50 text-cyan-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold truncate">
                    {item.area}
                  </span>
                </div>
                <ChevronRight className={`hidden md:block w-4 h-4 transition-transform ${
                  selected === index ? 'rotate-90' : 'opacity-30'
                }`} />
              </button>
            ))}
          </div>

          {/* Details Section - Same spacing & animation */}
          <div className="w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-center bg-white relative overflow-y-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-500">
              
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 rounded-xl md:rounded-2xl flex items-center justify-center text-cyan-600 border border-cyan-100 shadow-sm shrink-0">
                  {React.cloneElement(focusAreas[selected].icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div>
                  <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">
                    {focusAreas[selected].area}
                  </h2>
                  <p className="text-cyan-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest font-mono italic">
                    Metabolic Analysis Active
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-cyan-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Primary Monitoring
                  </p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                    {focusAreas[selected].monitor}
                  </p>
                </div>
                
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-cyan-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    Core Parameters
                  </p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                    {focusAreas[selected].params}
                  </p>
                </div>
              </div>

              <div className="p-4 md:p-5 bg-gradient-to-br from-slate-50 to-cyan-50/40 rounded-2xl border border-slate-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-cyan-600" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Expected Health Impact
                    </span>
                  </div>
                  <p className="text-base md:text-xl font-black text-cyan-900 leading-tight">
                    {focusAreas[selected].impact}
                  </p>
                </div>
                <Utensils className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-24 md:h-24 text-cyan-600/5 rotate-12 transition-transform group-hover:scale-110" />
              </div>

              <div className="mt-4 md:mt-6 flex items-start md:items-center gap-2 text-slate-400 italic text-[9px] md:text-[10px]">
                <Activity className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>Precision nutrition adjustments recommended for glycaemic stability.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nutrition;