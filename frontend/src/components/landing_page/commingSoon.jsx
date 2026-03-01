import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CommingSoon = () => {
  const location = useLocation();
  const pageName = location.state || "Products";

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
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, '0'),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        )
          .toString()
          .padStart(2, '0'),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        )
          .toString()
          .padStart(2, '0'),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        )
          .toString()
          .padStart(2, '0')
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
    <div className="bg-[#f0f9f6] relative flex flex-col items-center py-20 px-6 overflow-hidden">

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-emerald-100/60 via-transparent to-teal-50/40 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-green-100/50 via-transparent to-transparent pointer-events-none"></div>

      <main className="relative z-10 max-w-4xl w-full text-center">

        {/* Heading */}
        <div className="overflow-hidden mb-4 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
            {pageName} Coming Soon
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-semibold text-emerald-600 mb-8">
          Your Trusted Online Pharmacy & AI Health Partner
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-emerald-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-emerald-600 tabular-nums">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-emerald-800/60 font-bold mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Notification Section */}
        {!isSubscribed ? (
          <div className="max-w-md mx-auto">
            <h3 className="text-base font-semibold text-slate-800 mb-4">
              Get Notified When We Launch
            </h3>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 rounded-2xl border border-emerald-100 bg-white focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 pr-36 shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-xl font-bold transition-all"
              >
                Notify Me
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-md mx-auto bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
            <p className="font-bold text-lg text-emerald-700">
              You're on the list!
            </p>
            <p className="text-sm text-emerald-600">
              We'll send you an invite to My Easy Pharma soon.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CommingSoon;
