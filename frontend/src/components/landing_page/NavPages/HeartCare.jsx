import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Moon, 
  Scale, 
  TrendingUp,
  Stethoscope,
  ChevronRight
} from 'lucide-react';

const HeartCare = () => {
  const [selected, setSelected] = useState(0);

  const focusAreas = [
    {
      area: "Cardiometabolic Risk",
      monitor: "Vital trends",
      params: "BP, Resting HR",
      impact: "Early cardiac signals",
      icon: <Activity className="w-5 h-5" />
    },
    {
      area: "Lifestyle Load",
      monitor: "Sedentary behaviour",
      params: "Activity vs inactivity",
      impact: "Health optimisation",
      icon: <Zap className="w-5 h-5" />
    },
    {
      area: "Stress Burden",
      monitor: "Chronic stress",
      params: "Stress index",
      impact: "CV Protection",
      icon: <Heart className="w-5 h-5" />
    },
    {
      area: "Sleep-Heart Link",
      monitor: "Recovery quality",
      params: "Sleep depth",
      impact: "Risk reduction",
      icon: <Moon className="w-5 h-5" />
    },
    {
      area: "Weight & Waist",
      monitor: "Body metrics",
      params: "Obesity signals",
      impact: "Long-term health",
      icon: <Scale className="w-5 h-5" />
    },
    {
      area: "Preventive Scoring",
      monitor: "Heart risk score",
      params: "Composite indicators",
      impact: "Early action guidance",
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-2/3 md:h-2/3 bg-[#f8fafc] font-sans text-slate-800 p-2 md:p-6 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col  h-fit md:h-full md:max-h-[90vh]">
        
        <div className="bg-gradient-to-r from-rose-600 to-slate-600 p-4 md:p-5 text-white shrink-0">
          <h1 className="text-xl md:text-3xl font-black mb-1">Heart Care <span className="text-rose-100 italic">Parameters</span></h1>
          <p className="text-rose-50 text-[10px] md:text-xs max-w-2xl opacity-90 leading-tight font-medium">
            We monitor critical aspects essential for your cardiovascular protection. 
            These represent our core clinical focus.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          
          <div className="w-full md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-2 md:p-3 space-y-1 md:space-y-1.5 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-2 md:gap-0 no-scrollbar">
            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex-shrink-0 md:flex-shrink-1 w-[200px] md:w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl transition-all text-left group ${
                  selected === index 
                  ? 'bg-rose-600 text-white shadow-md translate-x-0 md:translate-x-1' 
                  : 'bg-white md:bg-transparent hover:bg-slate-200 text-slate-700 border border-slate-200 md:border-0'
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`p-1 md:p-1.5 rounded-lg transition-colors ${selected === index ? 'bg-rose-500' : 'bg-rose-50 text-rose-600'}`}>
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
                <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-xl md:rounded-2xl flex items-center justify-center text-rose-600 border border-rose-100 shadow-sm shrink-0">
                  {React.cloneElement(focusAreas[selected].icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                </div>
                <div>
                  <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">{focusAreas[selected].area}</h2>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-rose-500"></span>
                    </span>
                    <p className="text-rose-600 text-[8px] md:text-[9px] font-bold uppercase tracking-widest font-mono italic">Clinical Analysis Active</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-rose-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Primary Monitoring</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">{focusAreas[selected].monitor}</p>
                </div>
                
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-rose-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Core Parameters</p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">{focusAreas[selected].params}</p>
                </div>
              </div>

              <div className="p-4 md:p-5 bg-gradient-to-br from-slate-50 to-rose-50/40 rounded-2xl border border-slate-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-rose-600" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">Expected Health Impact</span>
                  </div>
                  <p className="text-base md:text-xl font-black text-rose-900 leading-tight">
                    {focusAreas[selected].impact}
                  </p>
                </div>
                <Heart className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-24 md:h-24 text-rose-600/5 rotate-12 transition-transform group-hover:scale-110" />
              </div>

              <div className="mt-4 md:mt-6 flex items-start md:items-center gap-2 text-slate-400 italic text-[9px] md:text-[10px]">
                <Activity className="w-3 h-3 md:w-3.5 md:h-3.5 mt-0.5 md:mt-0" />
                <span>Regular assessment is recommended for cardiac risk mitigation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartCare;