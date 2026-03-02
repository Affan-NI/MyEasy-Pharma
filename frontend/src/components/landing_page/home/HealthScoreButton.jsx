import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles, BrainCircuit, Zap, ShieldCheck, Activity } from 'lucide-react';

const App = () => {
  const navigate = useNavigate();
  const handleHealthScore = () => {
    console.log("Navigating to Health Score Page...");
    navigate("/health-score");
  };

  const handleDiseasePredictor = () => {
    console.log("Navigating to Disease Predictor Page...");
    window.location.href="https://myeasypharma.onrender.com";
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-transparent">
      {/* Cards container - max-w reduced to 5xl to decrease overall width */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        
        {/* Card 1: Health Score */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden py-8 border border-emerald-100 group/section animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-3">
              <BrainCircuit className="text-emerald-700 animate-spin-slow" size={12} />
              <span className="text-emerald-700 text-[10px] font-black uppercase tracking-widest">AI-Native Engine</span>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
              Transform Care with <br />
              <span className="text-emerald-600 relative inline-block">
                Health Score
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-200/50 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 text-xg mb-4 max-w-xs leading-relaxed font-medium px-4">
              Predict glucose stability and long-term health outcomes using Pharma 4.0 architecture.
            </p>

            <div className="flex justify-center gap-4 mb-6 text-slate-400 font-bold text-[9px] uppercase tracking-widest">
              <div className="flex items-center gap-1"><Zap size={12} className="text-emerald-500" /> Real-time</div>
              <div className="flex items-center gap-1"><ShieldCheck size={12} className="text-emerald-500" /> Clinical</div>
            </div>

            {/* Button: Orange Theme */}
            <div className="relative group/btn cursor-pointer w-full max-w-[280px]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#f06529] to-orange-400 rounded-xl blur opacity-20 group-hover/btn:opacity-60 transition duration-500"></div>
              <button 
                onClick={handleHealthScore}
                className="relative w-full flex items-center justify-center gap-3 bg-[#f06529] hover:bg-[#d9541e] text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 transform group-hover/btn:-translate-y-1 shadow-lg overflow-hidden"
              >
                <span className="flex items-center gap-2 text-sm md:text-base">
                  Calculate Score <ArrowRight size={18} />
                </span>
                <Sparkles size={16} className="absolute top-1 right-1 text-yellow-300 opacity-0 group-hover/btn:opacity-100" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Disease Predictor */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden py-8 border border-emerald-100 group/section animate-in fade-in slide-in-from-right-8 duration-700">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full mb-3">
              <Activity className="text-emerald-700 animate-pulse" size={12} />
              <span className="text-emerald-700 text-[10px] font-black uppercase tracking-widest">Intelligent Diagnostic</span>
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
              Analyze Risks with <br />
              <span className="text-emerald-600 relative inline-block">
                Disease Predictor
                <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-200/50 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-slate-600 text-xg mb-4 max-w-xs leading-relaxed font-medium px-4">
              Advanced ML models to predict multiple clinical risks and disease patterns.
            </p>

            <div className="flex justify-center gap-4 mb-6 text-slate-400 font-bold text-[9px] uppercase tracking-widest">
              <div className="flex items-center gap-1"><Zap size={12} className="text-emerald-500" /> Multi-Risk</div>
              <div className="flex items-center gap-1"><ShieldCheck size={12} className="text-emerald-500" /> Precise</div>
            </div>

            {/* Button: Green Theme */}
            <div className="relative group/btn cursor-pointer w-full max-w-[280px]">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl blur opacity-20 group-hover/btn:opacity-60 transition duration-500"></div>
              <button 
                onClick={handleDiseasePredictor}
                className="relative w-full flex items-center justify-center gap-3 bg-[#00b359] hover:bg-[#00994d] text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 transform group-hover/btn:-translate-y-1 shadow-lg overflow-hidden"
              >
                <span className="flex items-center gap-2 text-sm md:text-base">
                  Predict Disease <ArrowRight size={18} />
                </span>
                <Sparkles size={16} className="absolute top-1 right-1 text-emerald-200 opacity-0 group-hover/btn:opacity-100" />
              </button>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.8deg); }
          75% { transform: rotate(-0.8deg); }
        }
        .animate-tilt { animation: tilt 8s infinite linear; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
      `}} />
    </div>
  );
};

export default App;