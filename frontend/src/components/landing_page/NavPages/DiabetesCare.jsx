import React, { useState } from "react";
import {
  Activity,
  TrendingUp,
  Syringe,
  AlertTriangle,
  Brain,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const DiabetesCare = () => {
  const [selected, setSelected] = useState(0);

  const focusAreas = [
    {
      area: "Glucose Control",
      monitor: "Daily glucose trends",
      params: "Fasting, PP, HbA1c",
      impact: "Core diabetes management",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      area: "Time-in-Range",
      monitor: "CGM metrics",
      params: "Target range %",
      impact: "Quality of control",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      area: "Insulin Therapy",
      monitor: "Dose & timing",
      params: "Basal–bolus balance",
      impact: "Reduced variability",
      icon: <Syringe className="w-5 h-5" />,
    },
    {
      area: "Hypo/Hyper Events",
      monitor: "Event frequency",
      params: "Recurrence patterns",
      impact: "Acute risk prevention",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      area: "Behaviour Impact",
      monitor: "Lifestyle correlation",
      params: "Stress, sleep, food",
      impact: "Predictive insights",
      icon: <Brain className="w-5 h-5" />,
    },
    {
      area: "Complication Risk",
      monitor: "Trend analysis",
      params: "Early warning signals",
      impact: "Preventive care",
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-2/3 md:h-2/3 bg-[#f1f5f9] font-sans text-slate-800 p-2 md:p-4 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col shadow-lg h-full max-h-[92vh] md:max-h-[85vh]">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 md:p-6 text-white shrink-0">
          <h1 className="text-xl md:text-3xl font-black mb-1">
            Diabetes <span className="text-blue-100 italic">Care Intelligence</span>
          </h1>
          <p className="text-blue-50 text-[10px] md:text-sm max-w-2xl opacity-90 leading-tight font-medium">
            Continuous glucose-focused monitoring powered by structured clinical
            analytics for proactive diabetes management.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">

          {/* SIDEBAR */}
          <div className="w-full md:w-1/3 bg-blue-50 border-b md:border-b-0 md:border-r border-blue-100 p-2 md:p-4 space-y-1 md:space-y-2 overflow-x-auto md:overflow-y-auto flex md:flex-col gap-2 md:gap-0 no-scrollbar">

            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`flex-shrink-0 md:flex-shrink-1 w-[200px] md:w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl transition-all text-left group ${
                  selected === index
                    ? "bg-blue-600 text-white shadow-md translate-x-0 md:translate-x-1"
                    : "bg-white md:bg-transparent hover:bg-blue-100 text-slate-700 border border-blue-200 md:border-0"
                }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div
                    className={`p-1 md:p-1.5 rounded-lg ${
                      selected === index
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold truncate">
                    {item.area}
                  </span>
                </div>

                <ChevronRight
                  className={`hidden md:block w-4 h-4 transition-transform ${
                    selected === index ? "rotate-90" : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="w-full md:w-2/3 p-4 md:p-8 flex flex-col justify-center bg-white relative overflow-y-auto">

            <div className="animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-500">

              {/* TITLE */}
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-xl md:rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm shrink-0">
                  {React.cloneElement(focusAreas[selected].icon, {
                    className: "w-5 h-5 md:w-6 md:h-6",
                  })}
                </div>

                <div>
                  <h2 className="text-lg md:text-2xl font-black text-slate-800 leading-tight">
                    {focusAreas[selected].area}
                  </h2>

                  <p className="text-blue-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest font-mono italic">
                    Clinical Monitoring Active
                  </p>
                </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
                <div className="space-y-0.5 md:space-y-1 border-l-4 border-blue-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    What We Track
                  </p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                    {focusAreas[selected].monitor}
                  </p>
                </div>

                <div className="space-y-0.5 md:space-y-1 border-l-4 border-blue-100 pl-3 md:pl-4">
                  <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Parameters
                  </p>
                  <p className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                    {focusAreas[selected].params}
                  </p>
                </div>
              </div>

              {/* IMPACT CARD */}
              <div className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1.5 md:mb-2">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Clinical Value
                    </span>
                  </div>
                  <p className="text-base md:text-xl font-black text-blue-800 leading-tight">
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

export default DiabetesCare;