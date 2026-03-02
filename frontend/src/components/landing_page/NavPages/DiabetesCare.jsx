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
    <div className="h-2/3 bg-[#f1f5f9] font-sans text-slate-800 p-2 md:p-6 flex justify-center overflow-hidden">
      <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 flex flex-col max-h-full">
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-6 text-white shrink-0">
          <h1 className="text-3xl font-black mb-2">
            Diabetes{" "}
            <span className="text-blue-100 italic">Care Intelligence</span>
          </h1>
          <p className="text-blue-50 text-sm max-w-2xl opacity-90 leading-snug font-medium">
            Continuous glucose-focused monitoring powered by structured clinical
            analytics for proactive diabetes management.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
          <div className="w-full md:w-1/3 bg-blue-50 border-r border-blue-100 p-4 space-y-2 overflow-y-auto">
            {focusAreas.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                  selected === index
                    ? "bg-blue-600 text-white shadow-md translate-x-1"
                    : "hover:bg-blue-100 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      selected === index ? "text-white" : "text-blue-600"
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
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm shrink-0">
                  {focusAreas[selected].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-800">
                    {focusAreas[selected].area}
                  </h2>
                  <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest font-mono italic">
                    Clinical Monitoring Active
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1 border-l-4 border-blue-100 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    What We Track
                  </p>
                  <p className="text-base font-bold text-slate-700">
                    {focusAreas[selected].monitor}
                  </p>
                </div>

                <div className="space-y-1 border-l-4 border-blue-100 pl-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Parameters
                  </p>
                  <p className="text-base font-bold text-slate-700">
                    {focusAreas[selected].params}
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                      Clinical Value
                    </span>
                  </div>
                  <p className="text-xl font-black text-blue-800 leading-tight">
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
