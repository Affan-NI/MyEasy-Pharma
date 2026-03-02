import React from 'react';
import { 
  Apple, 
  Clock, 
  Flame, 
  Scale, 
  Wine, 
  ClipboardCheck, 
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Info
} from 'lucide-react';

const Nutrition = () => {
  const trackingMetrics = [
    {
      focus: "Meal Timing",
      track: "Eating regularity",
      params: "Meal gaps, late meals",
      why: "Prevents glucose swings",
      icon: <Clock className="text-emerald-500" />
    },
    {
      focus: "Carbohydrate Intake",
      track: "Carb type & load",
      params: "Simple vs complex carbs",
      why: "Better glycaemic control",
      icon: <Flame className="text-orange-500" />
    },
    {
      focus: "Food Quality",
      track: "Processed food index",
      params: "Ultra-processed frequency",
      why: "Lowers inflammation risk",
      icon: <ShieldCheck className="text-blue-500" />
    },
    {
      focus: "Portion Behaviour",
      track: "Over/under eating",
      params: "Portion deviation",
      why: "Reduces insulin mismatch",
      icon: <Scale className="text-indigo-500" />
    },
    {
      focus: "Alcohol Impact",
      track: "Timing & quantity",
      params: "Alcohol-linked events",
      why: "Hypoglycaemia prevention",
      icon: <Wine className="text-rose-500" />
    },
    {
      focus: "Nutrition Scoring",
      track: "Diet risk score",
      params: "Composite food behaviour",
      why: "Personalised diet insights",
      icon: <ClipboardCheck className="text-emerald-600" />
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pb-20">
      {/* 1. HERO SECTION: Purpose-Driven */}
      <section className="relative py-12 md:py-20 px-6 bg-emerald-50/50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase tracking-widest mb-6">
              <BrainCircuit size={14} /> Pharma 4.0 Nutrition Engine
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1]">
              Precision Nutrition <br />
              <span className="text-emerald-600">is Diabetes Control</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Our AI doesn't just suggest recipes. It tracks <strong>Composite Food Behaviour</strong> to predict glucose swings and prevent insulin mismatch before they impact your health.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#f06529] hover:bg-[#d9541e] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-orange-100 transition-all">
                Generate My Diet Risk Score
              </button>
            </div>
          </div>
          
          <div className="lg:w-2/5 w-full">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-emerald-50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
               <div className="relative z-10">
                 <div className="flex items-center justify-between mb-8">
                    <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Today's Nutrition</h4>
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black">78/100</span>
                 </div>
                 <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-400">CARB LOAD STABILITY</span>
                        <span className="text-emerald-600">OPTIMAL</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%]"></div>
                      </div>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                      <p className="text-xs text-emerald-800 font-bold italic leading-relaxed">
                        "Your meal timing today is perfect. It has reduced your sugar fluctuation risk by 14%."
                      </p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE ARCHITECTURE GRID: Based on Table */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Precision Nutrition Framework</h2>
          <p className="text-slate-500 max-w-2xl font-medium">We track these 6 core focus areas to provide a complete clinical picture of your dietary health.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackingMetrics.map((metric, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all group flex flex-col">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <h4 className="text-xl font-black text-slate-800 mb-2">{metric.focus}</h4>
              <p className="text-sm text-emerald-600 font-bold mb-6">{metric.track}</p>
              
              <div className="mt-auto space-y-4 pt-6 border-t border-slate-50">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Parameters</p>
                  <p className="text-sm font-bold text-slate-700">{metric.params}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Clinical Impact</p>
                  <p className="text-xs font-bold text-emerald-800 leading-relaxed">{metric.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM LOGIC SECTION: "Main Purpose" Explained */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                  <Zap className="text-emerald-400" size={20} />
                </div>
                <span className="text-emerald-400 font-black uppercase tracking-widest text-sm">Platform Logic</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Predictive, Not <br />Just Reactive.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    <strong>Sugar Stability:</strong> Meal timing aur carbs ko track karke hum sugar spikes ko aane se pehle rok dete hain.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    <strong>Portion Match:</strong> Insulin aur aapke portion ka sahi match banate hain taaki mismatch na ho.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    <strong>Safety Alerts:</strong> Alcohol ya missed meals ke risks ko pehchan kar Hypoglycaemia se bachate hain.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] relative">
              <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                <Info className="text-emerald-400" /> Clinical Outcomes
              </h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Ye system patient ke 'Diet Risk Score' ke basis par personalized insights generate karta hai, jo doctors ko patient ke real lifestyle behaviors samajhne mein madad karte hain.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-black text-white">80%</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Better Adherence</p>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-2xl font-black text-white">2.1x</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Stability Improvement</p>
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-emerald-50 transition-all flex items-center justify-center gap-2">
                Download Clinical Whitepaper <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;