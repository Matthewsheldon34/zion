import { NavLink } from "react-router";
import { useEffect, useRef, useState } from "react";
import MatthewSheldon from '../assets/MatthewSheldon.jpg';

/* ── Scroll-reveal hook (same as Home / Form) ── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Signup() {
  const marqueeItems = [
    "Join Zion", "★", "Create Your Account", "★", "Taste the Difference",
    "★", "Fresh · Local · International", "★", "Order in Seconds", "★"
  ];

  const fields = [
    { label: "Username:", id: "username", type: "text", placeholder: " Enter your username" },
    { label: "Email:", id: "email", type: "email", placeholder: " Enter your email" },
    { label: "Password:", id: "password", type: "password", placeholder: " Enter your password" },
    { label: "Forgot password:", id: "forgot", type: "text", placeholder: " Enter your recovery email" }
  ];

  return (
    <>
      {/* ── Global keyframes (consistent with Home / Form) ── */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(40px,-60px) scale(1.15); }
          66%      { transform: translate(-30px,30px) scale(0.9); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 30px -8px rgba(0,255,200,0.35); }
          50%      { box-shadow: 0 0 55px -5px rgba(0,255,200,0.75); }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
        }
        @keyframes inputFocusGlow {
          from { box-shadow: 0 0 0 0 rgba(0,255,200,0.0); }
          to   { box-shadow: 0 0 0 4px rgba(0,255,200,0.15); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-6px) rotate(0.4deg); }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
        }
        .animate-blob { animation: blob 18s ease-in-out infinite; }
        .animate-float { animation: floatY 6s ease-in-out infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-shimmer-text {
          background-size: 200% auto;
          animation: shimmerText 4s linear infinite;
        }
        .animate-glow { animation: glowPulse 4s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 14s linear infinite; }
        .animate-card-float { animation: cardFloat 8s ease-in-out infinite; }

        /* Form field focus glow */
        .field-focus:focus {
          animation: inputFocusGlow 0.35s ease-out forwards;
          border-color: #00ffc3 !important;
          outline: none;
        }
        /* Sliding gradient underline */
        .field-wrap { position: relative; }
        .field-wrap::after {
          content: '';
          position: absolute;
          bottom: 6px; left: 12px;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #00ffc3, #7ae9ff, #b28aff);
          transition: width 0.5s ease;
          border-radius: 2px;
        }
        .field-wrap:focus-within::after { width: calc(100% - 24px); }
      `}</style>

      <div className="min-h-screen bg-[#0d1414] overflow-x-hidden relative text-white">

        {/* ── Animated background layers ── */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1414] via-[#1a2737] to-[#0d1414] animate-gradient"></div>
          <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#00ffc3]/10 blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[-15%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#7ae9ff]/10 blur-[140px] animate-blob" style={{ animationDelay: '-6s' }}></div>
          <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] rounded-full bg-[#b28aff]/10 blur-[120px] animate-blob" style={{ animationDelay: '-12s' }}></div>
        </div>

        {/* ── Header ── */}
        <header className="w-full relative z-20">
          <nav className="h-auto w-full px-4 py-3 bg-[#1c2525]/80 backdrop-blur-md justify-between rounded-b-2xl flex items-center shadow-lg shadow-black/30 sticky top-0 z-50 border-b border-[#00ffc3]/10">
            <div className="p-2 flex items-center gap-2 w-auto group">
              <a href="#" className="flex items-center gap-2 relative">
                <div className="relative">
                  <img
                    src={MatthewSheldon}
                    alt="sheldon"
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-[#00ffc3]/40 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                  <span className="absolute -inset-1 rounded-full border border-[#00ffc3]/30 animate-spin-slow"></span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-[#00ffc3] via-[#7ae9ff] to-[#b28aff] bg-clip-text text-transparent animate-shimmer-text">
                  Zion
                </span>
              </a>
            </div>

            <ul className="flex items-center text-white gap-1">
              {[
                { to: "/", label: "Home" },
                { to: "/form", label: "Form" },
                { to: "/signup", label: "Signup" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-base font-medium transition-colors duration-300 ${
                        isActive ? "text-[#00ffc3]" : "text-gray-300 hover:text-white"
                      } group/nav`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {label}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#00ffc3] to-[#b28aff] transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ── Marquee banner ── */}
        <div className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#1a2737] via-[#0f1a1a] to-[#1a2737] border-y border-[#00ffc3]/10 py-3 mt-2">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className={`mx-6 text-sm font-mono tracking-widest uppercase ${
                  item === "★" ? "text-[#00ffc3] text-lg" : "text-gray-400"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 w-auto mx-auto px-4 py-10">

          {/* Heading */}
          <Reveal>
            <div className="text-center py-6">
              <h1 className="text-3xl md:text-5xl font-bold font-mono uppercase bg-gradient-to-r from-[#00ffc3] via-[#7ae9ff] to-[#b28aff] bg-clip-text text-transparent animate-shimmer-text inline-block">
                Join Zion
              </h1>
              <p className="text-gray-400 mt-3 text-lg font-mono">
                Create your account and start ordering in seconds.
              </p>
              <span className="inline-block mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#00ffc3] to-transparent animate-pulse"></span>
            </div>
          </Reveal>

          {/* ── Signup card ── */}
          <Reveal delay={150}>
            <div className="max-w-lg mx-auto relative">

              {/* Spinning conic gradient border behind the card */}
              <div className="absolute inset-[-3px] rounded-3xl overflow-hidden">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#00ffc3,#7ae9ff,#b28aff,#00ffc3)] animate-spin-slow opacity-50 blur-sm"></div>
              </div>

              <form
                method="POST"
                id="form"
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl animate-card-float"
              >

                {/* Decorative dashed ring in corner */}
                <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full border border-dashed border-[#00ffc3]/20 animate-spin-slow"></div>

                <div className="relative space-y-4">
                  {fields.map((field) => (
                    <div key={field.id} className="space-y-1">
                      <label
                        htmlFor={field.id}
                        className="text-lg font-medium font-serif text-gray-200 transition-colors duration-300 group-focus-within:text-[#00ffc3]"
                      >
                        {field.label}
                      </label>
                      <div className="field-wrap">
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          className="field-focus w-full bg-[#0d1414]/50 border border-gray-600/60 shadow-inner rounded-lg h-11 px-4 text-white font-medium text-lg placeholder:text-gray-500 transition-all duration-300 hover:border-[#00ffc3]/50"
                        />
                      </div>
                    </div>
                  ))}

                  {/* ── Buttons ── */}
                  <div className="pt-4 grid gap-4">

                    {/* Signup button (gradient + shine sweep) */}
                    <button
                      type="submit"
                      className="group/btn relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#00ffc3] via-[#7ae9ff] to-[#b28aff] p-[2px] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative block rounded-full bg-[#0d1414]/90 px-6 py-3 text-xl font-bold font-sans text-white group-hover/btn:bg-transparent group-hover/btn:text-[#0d1414] transition-colors duration-300">
                        Signup
                      </span>
                    </button>

                    {/* Login button (ghost style) */}
                    <button
                      type="button"
                      className="group/btn2 relative w-full overflow-hidden rounded-full border border-[#00ffc3]/40 bg-transparent px-6 py-3 text-xl font-bold font-sans text-[#00ffc3] transition-all duration-300 hover:bg-[#00ffc3]/10 hover:border-[#00ffc3] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00ffc3]/15 to-transparent -translate-x-full group-hover/btn2:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative">Login</span>
                    </button>
                  </div>

                  {/* Divider with soft pulse */}
                  <div className="flex items-center gap-3 pt-4">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffc3]/30 to-transparent"></span>
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">or</span>
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00ffc3]/30 to-transparent"></span>
                  </div>

                  {/* Small hint line */}
                  <p className="text-center text-sm text-gray-500 font-mono">
                    Already have an account?{" "}
                    <span className="text-[#00ffc3] hover:underline cursor-pointer transition-all duration-300">
                      Login instead
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        {/* ── Footer marquee ── */}
        <div className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#0d1414] via-[#1a2737] to-[#0d1414] border-t border-[#00ffc3]/10 py-4 mt-10">
          <div className="flex whitespace-nowrap animate-marquee" style={{ animationDirection: 'reverse' }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className={`mx-6 text-sm font-mono tracking-widest uppercase ${
                  item === "★" ? "text-[#b28aff] text-lg" : "text-gray-500"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;