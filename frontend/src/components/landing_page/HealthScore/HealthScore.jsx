import React, { useState, useRef } from 'react';
import { 
  Activity, 
  Apple, 
  Moon, 
  ShieldAlert, 
  ArrowRight, 
  BrainCircuit, 
  Zap, 
  Lightbulb, 
  SquareActivity, 
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  HelpCircle
} from 'lucide-react';

const App = () => {
  const [formData, setFormData] = useState({
    tir: '', hba1c: '', variability: '', events: '',
    eating: '', carb: '', sedentary: '', alcohol: '', meals: '',
    sleep: '', screen: '', stress: '', spikes: '',
    trend: '', recurrence: '', fatigue: '', inflammation: ''
  });

  const [results, setResults] = useState(null);
  const resultRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    const val = (id) => parseFloat(formData[id]) || 0;

    // 1. GSS Calculation
    const gss = (0.40 * val('tir')) + 
                (0.25 * (100 - val('hba1c'))) + 
                (0.20 * (100 - val('variability'))) + 
                (0.15 * (100 - val('events')));

    // 2. LRI Calculation
    const lri = 100 - (
      (0.30 * val('eating')) + 
      (0.25 * val('carb')) + 
      (0.20 * val('sedentary')) + 
      (0.15 * val('alcohol')) + 
      (0.10 * val('meals'))
    );

    // 3. SSGS Calculation
    const ssgs = 100 - (
      (0.35 * val('sleep')) + 
      (0.25 * val('screen')) + 
      (0.20 * val('stress')) + 
      (0.20 * val('spikes'))
    );

    // 4. ECRS Calculation
    const ecrs = 100 - (
      (0.30 * val('trend')) + 
      (0.25 * val('recurrence')) + 
      (0.25 * val('fatigue')) + 
      (0.20 * val('inflammation'))
    );

    // 5. Overall Health Score
    const overall = (0.35 * gss) + (0.25 * lri) + (0.20 * ssgs) + (0.20 * ecrs);
    const score = Math.max(0, Math.min(100, Math.round(overall)));

    const metrics = [
      { name: 'Glucose Stability', val: Math.round(gss), nudge: "Improve your Time in Range (TIR) to stabilize your GSS score." },
      { name: 'Lifestyle Factors', val: Math.round(lri), nudge: "Establish regular meal timings to reduce LRI load." },
      { name: 'Sleep & Stress', val: Math.round(ssgs), nudge: "Improve sleep consistency and reduce late-night screen time." },
      { name: 'Complication Risk', val: Math.round(ecrs), nudge: "Prioritize routine adherence and monitor inflammation signals." }
    ];

    metrics.sort((a, b) => a.val - b.val);

    setResults({
      overall: score,
      gss: Math.round(gss),
      lri: Math.round(lri),
      ssgs: Math.round(ssgs),
      ecrs: Math.round(ecrs),
      topRisks: metrics.slice(0, 2),
      nudge: metrics[0].nudge
    });

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getStatusColor = (score) => {
    if (score >= 80) return 'text-emerald-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-rose-500';
  };

  const getBgColor = (score) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-orange-500';
    return 'bg-rose-500';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">

      {/* Header - Changed to Light Green Background */}
      <div className="bg-emerald-50 text-emerald-900 py-16 px-6 text-center relative overflow-hidden border-b border-emerald-100">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-200 via-transparent to-transparent"></div>
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-4 relative z-10">Diabetes Health Score</h1>
        <p className="text-emerald-700 text-lg relative z-10 font-medium">Advanced Pharma 4.0 Clinical Calculator</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Section 1: Glycaemic Stability */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6 font-bold text-emerald-800">
                <SquareActivity size={20} className="text-[#10b981]" />
                <span>Glycaemic Stability</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField 
                  id="tir" 
                  label="Time in Range (TIR %)" 
                  hint="Sugar kitna time target range mein raha"
                  value={formData.tir} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="hba1c" 
                  label="HbA1c Deviation" 
                  hint="Target level se HbA1c kitna deviate hai"
                  value={formData.hba1c} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="variability" 
                  label="Glucose Variability" 
                  hint="Glucose levels mein kitna fluctuation hota hai"
                  value={formData.variability} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="events" 
                  label="Hypo/Hyper Events" 
                  hint="Sugar extreme high ya low hone ki frequency"
                  value={formData.events} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section 2: Lifestyle Risk */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6 font-bold text-emerald-800">
                <Apple size={20} className="text-[#10b981]" />
                <span>Lifestyle Risk</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField 
                  id="eating" 
                  label="Eating Irregularity" 
                  hint="Meals timing mein kitni irregularity hai"
                  value={formData.eating} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="carb" 
                  label="Carb Load Risk" 
                  hint="High carbs ya sugar intake ka risk level"
                  value={formData.carb} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="sedentary" 
                  label="Sedentary Index" 
                  hint="Physical activity ki kami aur sitting time"
                  value={formData.sedentary} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="alcohol" 
                  label="Alcohol Impact" 
                  hint="Alcohol consumption ka glucose par impact"
                  value={formData.alcohol} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="meals" 
                  label="Missed Meals" 
                  hint="Meals skip karne ya chhodne ki count"
                  value={formData.meals} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section 3: Stress & Sleep */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6 font-bold text-emerald-800">
                <Moon size={20} className="text-[#10b981]" />
                <span>Stress & Sleep</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField 
                  id="sleep" 
                  label="Sleep Debt" 
                  hint="Required neend mein kitni kami (debt) hai"
                  value={formData.sleep} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="screen" 
                  label="Screen Exposure" 
                  hint="Bedtime se pehle screen (Mobile/TV) use"
                  value={formData.screen} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="stress" 
                  label="Stress Index" 
                  hint="Mental stress aur tension ka current level"
                  value={formData.stress} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="spikes" 
                  label="Stress Spikes" 
                  hint="Stress ki wajah se sugar spikes ke incidents"
                  value={formData.spikes} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {/* Section 4: Complication Risk */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-6 font-bold text-emerald-800">
                <ShieldAlert size={20} className="text-[#10b981]" />
                <span>Complication Risk</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField 
                  id="trend" 
                  label="Variability Trend" 
                  hint="Glucose variability ka long-term trend"
                  value={formData.trend} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="recurrence" 
                  label="Event Recurrence" 
                  hint="Same health issues ka bar-bar repeat hona"
                  value={formData.recurrence} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="fatigue" 
                  label="Adherence Fatigue" 
                  hint="Treatment routine se hone wali mental thakaan"
                  value={formData.fatigue} 
                  onChange={handleInputChange} 
                />
                <InputField 
                  id="inflammation" 
                  label="Inflammation" 
                  hint="Body mein sujan ya pain ke internal signals"
                  value={formData.inflammation} 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

          </div>

          <div className="text-center pt-10">
            <button 
              type="button" 
              onClick={calculateScore}
              className="bg-[#f06529] hover:bg-[#d9541e] text-white px-12 py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-orange-200 transition-all active:scale-95"
            >
              Calculate Score <ArrowRight className="inline ml-2" />
            </button>
          </div>
        </form>

        {/* Results Dashboard */}
        {results && (
          <div ref={resultRef} className="mt-20 pt-10 border-t border-slate-200 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 text-center">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Overall Health Score</p>
              <div className={`text-7xl md:text-8xl font-black leading-none mb-2 ${getStatusColor(results.overall)}`}>
                {results.overall}
              </div>
              <div className={`text-xl font-bold uppercase tracking-[0.3em] mb-8 ${getStatusColor(results.overall)}`}>
                {results.overall >= 80 ? 'Healthy' : results.overall >= 60 ? 'Attention' : 'Risk'}
              </div>

              <div className="max-w-md mx-auto h-2.5 bg-slate-100 rounded-full overflow-hidden mb-12">
                <div 
                  className={`h-full transition-all duration-1000 ${getBgColor(results.overall)}`}
                  style={{ width: `${results.overall}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <ScorePill label="GSS" value={results.gss} />
                <ScorePill label="LRI" value={results.lri} />
                <ScorePill label="SSGS" value={results.ssgs} />
                <ScorePill label="ECRS" value={results.ecrs} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-slate-100 pt-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                    <AlertTriangle className="text-orange-500" size={20} /> Top Risk Drivers
                  </h4>
                  <div className="space-y-3">
                    {results.topRisks.map((risk, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-2xl border-l-4 border-[#f06529] flex justify-between items-center">
                        <span className="font-bold text-slate-700">{risk.name}</span>
                        <span className="text-orange-600 font-black">{risk.val}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-emerald-50 rounded-[2rem] p-8 text-emerald-900 border border-emerald-100 relative overflow-hidden h-full shadow-sm">
                  <div className="relative z-10">
                    <h4 className="font-bold mb-3 text-emerald-600 flex items-center gap-2">
                      <Lightbulb size={20} /> Smart Nudge
                    </h4>
                    <p className="text-xl font-medium leading-relaxed italic opacity-90">
                      "{results.nudge}"
                    </p>
                  </div>
                  <Zap className="absolute bottom-[-20px] right-[-10px] text-emerald-500/10 size-40 rotate-12" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({ id, label, hint, value, onChange }) => (
  <div className="space-y-2 group">
    <div className="flex items-center gap-1.5">
      <label htmlFor={id} className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">{label}</label>
      <div className="relative group/hint">
        <HelpCircle size={14} className="text-slate-300 cursor-help" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 bg-slate-800 text-white text-[11px] p-3 rounded-xl opacity-0 group-hover/hint:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl leading-snug">
          {hint}
        </div>
      </div>
    </div>
    <input 
      type="number" 
      id={id} 
      value={value} 
      onChange={onChange}
      placeholder="0-100"
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all placeholder:text-slate-300 font-medium"
    />
    <p className="text-[12px] text-slate-500 font-semibold italic mt-1.5 leading-relaxed">{hint}</p>
  </div>
);

const ScorePill = ({ label, value }) => (
  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
    <div className="text-2xl font-black text-emerald-800">{value}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

export default App;