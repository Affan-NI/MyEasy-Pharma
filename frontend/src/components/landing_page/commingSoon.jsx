import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const CommingSoon = () => {
  const location = useLocation();
  const pageName = location.state; 
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
        seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f9f6] relative flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* Modern Green Shaded Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-100/60 via-transparent to-teal-50/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl w-full text-center">

        {/* Animated Coming Soon Section */}
        <div className="overflow-hidden mb-6  flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 tracking-tight animate-in slide-in-from-top-full duration-1000 fill-mode-forwards">
            {pageName} Coming Soon
          </h1>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-forwards">
          <p className="text-xl md:text-2xl font-semibold text-emerald-600 mb-6">
            Your Trusted Online Pharmacy & AI Health Partner
          </p>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-in fade-in zoom-in-95 duration-1000 delay-500 fill-mode-forwards">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div key={item.label} className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 tabular-nums">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-800/60 font-bold mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        {/* <div className="flex flex-wrap justify-center gap-12 mb-16 animate-in fade-in slide-in-from-bottom-2 duration-1000 delay-700 fill-mode-forwards">
          {[
            { label: 'Safe Delivery', color: 'text-emerald-600', bg: 'bg-emerald-100', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10' },
            { label: 'AI Health Insights', color: 'text-blue-600', bg: 'bg-blue-100', icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
            { label: 'E-Prescription', color: 'text-purple-600', bg: 'bg-purple-100', icon: 'M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' }
          ].map((feature) => (
            <div key={feature.label} className="flex flex-col items-center group cursor-default">
              <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={feature.color} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d={feature.icon}/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-slate-700">{feature.label}</span>
            </div>
          ))}
        </div> */}

        {/* Notification Form */}
        {!isSubscribed ? (
          <div className="max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-forwards">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Get Notified When We Launch</h3>
            <form onSubmit={handleSubmit} className="relative group">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                required
                className="w-full px-6 py-4 rounded-2xl border border-emerald-100 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all pr-36 shadow-sm"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200 active:scale-95"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-100 p-6 rounded-2xl animate-in zoom-in-95 duration-300">
            <div className="flex flex-col items-center text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="mb-2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <p className="font-bold text-lg">You're on the list!</p>
              <p className="text-sm opacity-90 text-center">We'll send you an invite to My Easy Pharma soon.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CommingSoon;