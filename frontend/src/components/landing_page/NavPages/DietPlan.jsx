import React, { useState } from 'react';
import { 
  Utensils, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Droplets, 
  Scale, 
  TrendingDown,
  Stethoscope,
  ChevronRight,
  Leaf,
  Coffee
} from 'lucide-react';

const DietPlan = () => {
  const [selected, setSelected] = useState(0);

  const dietFocusAreas = [
    {
      area: "Glycemic Control",
      monitor: "Blood Sugar Stability",
      params: "Low GI Foods, Whole Grains",
      impact: "Prevents insulin spikes",
      icon: <Activity className="w-5 h-5" />
    },
    {
      area: "Fiber Management",
      monitor: "Digestive Velocity",
      params: "Legumes, Leafy Greens",
      impact: "Slows glucose absorption",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      area: "Portion Control",
      monitor: "Caloric Load",
      params: "Quarter-plate Method",
      impact: "Weight & A1c optimization",
      icon: <Scale className="w-5 h-5" />
    },
    {
      area: "Meal Timing",
      monitor: "Circadian Nutrition",
      params: "Consistent intervals",
      impact: "Avoids hypoglycemia",
      icon: <Clock className="w-5 h-5" />
    },
    {
      area: "Hydration Logic",
      monitor: "Fluid Balance",
      params: "Water, Herbal Infusions",
      impact: "Kidney protection",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      area: "Smart Snacking",
      monitor: "Inter-meal Sugars",
      params: "Nuts, Seeds, Protein",
      impact: "Stable energy levels",
      icon: <Coffee className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-2/3 md:h-2/3 bg-[#f1f5f9] font-sans text-slate-800 p-2 md:p-6 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col  h-fit md:h-full md:max-h-[90vh]">
        
        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-4 md:p-5 text-white shrink-0">
          <h1 className="text-xl md:text-3xl font-black mb-1">Diabetes <span className="text-blue-100 italic">Dietary Protocol</span></h1>
          <p className="text-blue-50 text-[10px] md:text-xs max-w-2xl opacity-90 leading-tight font-medium">
            Strategic nutritional interventions focused on glycemic variability reduction and metabolic health.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">

          <div className="w-full md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-2 md:p-3 space-y-1 md:space-y-1.5 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-2 md:gap-0">
            {dietFocusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex-shrink-0 md:flex-shrink-1 w-[200px] md:w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl transition-all text-left group ${
                  selected === index 
                  ? 'bg-blue-600 text-white shadow-md translate-x-0 md:translate-x-1' 
                  : 'bg-white md:bg-transparent hover:bg-slate-200 text-slate-600 border border-slate-200 md:border-0'
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`p-1 md:p-1.5 rounded-lg transition-colors ${selected === index ? 'bg-blue-500' : 'bg-blue-50 text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold truncate">{item.area}</span>
                </div>
                <ChevronRight className={`hidden md:block w-4 h-4 transition-transform ${selected === index ? 'rotate-90' : 'opacity-30'}`} />
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-center bg-white relative overflow-y-auto">
            <div className="animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-500">

              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm shrink-0">
                  {React.cloneElement(dietFocusAreas[selected].icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div>
                  <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">{dietFocusAreas[selected].area}</h2>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-cyan-500"></span>
                    </span>
                    <p className="text-blue-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest font-mono italic">Protocol Optimized</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-blue-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Therapeutic Goal</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">{dietFocusAreas[selected].monitor}</p>
                </div>
                
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-blue-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Dietary Components</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">{dietFocusAreas[selected].params}</p>
                </div>
              </div>

              <div className="p-4 md:p-5 bg-gradient-to-br from-blue-50 to-cyan-50/30 rounded-2xl border border-blue-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Clinical Outcome</span>
                  </div>
                  <p className="text-base md:text-xl font-black text-blue-900 leading-tight">
                    {dietFocusAreas[selected].impact}
                  </p>
                </div>
                <Utensils className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-24 md:h-24 text-blue-600/5 -rotate-12 transition-transform group-hover:scale-110" />
              </div>

              <div className="mt-4 md:mt-6 flex items-start md:items-center gap-2 text-slate-400 italic text-[9px] md:text-[10px]">
                <Activity className="w-3 h-3 md:w-3.5 md:h-3.5 mt-0.5 md:mt-0" />
                <span>Plan coordination with medical dosage is mandatory.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DietPlan;