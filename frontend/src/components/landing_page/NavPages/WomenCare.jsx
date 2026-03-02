import React, { useState } from "react";
import {
  Heart,
  Calendar,
  Wind,
  Moon,
  Scale,
  Smile,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const WomenCare = () => {
  const [selected, setSelected] = useState(0);

  const focusAreas = [
    {
      area: "Hormonal Health",
      monitor: "Cycle-linked trends",
      params: "Menstrual cycle patterns",
      impact: "Better glucose prediction",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      area: "Lifestyle Stress",
      monitor: "Work & home load",
      params: "Stress variability",
      impact: "Hormonal balance support",
      icon: <Wind className="w-5 h-5" />,
    },
    {
      area: "Sleep & Fatigue",
      monitor: "Rest & recovery",
      params: "Sleep quality, exhaustion",
      impact: "Energy optimisation",
      icon: <Moon className="w-5 h-5" />,
    },
    {
      area: "Weight Fluctuations",
      monitor: "Trend tracking",
      params: "Sudden weight changes",
      impact: "Early metabolic alerts",
      icon: <Scale className="w-5 h-5" />,
    },
    {
      area: "Mental Wellbeing",
      monitor: "Emotional health",
      params: "Mood stability, burnout",
      impact: "Holistic women-centric care",
      icon: <Smile className="w-5 h-5" />,
    },
    {
      area: "Preventive Insights",
      monitor: "Risk indicators",
      params: "Long-term health signals",
      impact: "Early intervention",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="h-2/3 bg-[#f8fafc] font-sans text-slate-800 p-2 md:p-6 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col max-h-full">
        <div className="bg-gradient-to-r from-rose-600 to-slate-600 p-6 text-white shrink-0">
          <h1 className="text-3xl font-black mb-2">
            Holistic <span className="text-rose-100 italic">Wellbeing</span>
          </h1>
          <p className="text-rose-50 text-sm max-w-2xl opacity-90 leading-snug font-medium">
            We monitor essential women-specific biological and lifestyle
            parameters to deliver personalised preventive intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-100 p-4 space-y-2 overflow-y-auto">
            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                  selected === index
                    ? "bg-rose-600 text-white shadow-md translate-x-1"
                    : "hover:bg-slate-200 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      selected === index ? "text-white" : "text-rose-600"
                    }
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold truncate">
                    {item.area}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    selected === index ? "rotate-90" : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="w-full md:w-2/3 p-8 flex flex-col justify-center bg-white relative overflow-y-auto">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 border border-rose-100 shadow-sm shrink-0">
                  {focusAreas[selected].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800">
                    {focusAreas[selected].area}
                  </h2>
                  <p className="text-rose-600 text-[10px] font-bold uppercase tracking-widest font-mono italic">
                    Clinical Monitoring Active
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1 border-l-4 border-rose-100 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Primary Monitoring
                  </p>
                  <p className="text-base font-bold text-slate-700">
                    {focusAreas[selected].monitor}
                  </p>
                </div>

                <div className="space-y-1 border-l-4 border-rose-100 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Core Parameters
                  </p>
                  <p className="text-base font-bold text-slate-700">
                    {focusAreas[selected].params}
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-rose-50/40 rounded-2xl border border-slate-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-rose-600" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                      Expected Health Impact
                    </span>
                  </div>
                  <p className="text-xl font-black text-rose-900 leading-tight">
                    {focusAreas[selected].impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCare;
