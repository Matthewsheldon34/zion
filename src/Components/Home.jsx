import MatthewSheldon from '../assets/MatthewSheldon.jpg';
import MukiM from "../assets/MukiM.jpeg";
import MosesL from "../assets/MosesL.png";
import Linda from "../assets/Linda.png";
import milkshake from "../assets/milkshake.png";
import lemonjuice from "../assets/lemonjuice.png";
import HotChocolate2 from "../assets/HotChocolate2.png";
import icedtea from "../assets/icedtea.jpg";
import sodas from "../assets/sodas.png";
import water from "../assets/Water.png";
import Chickensoupirish from "../assets/Chickensoupirish.png";
import mattokegnuts from "../assets/mattokegnuts.png";
import sweetandcowpeas from "../assets/sweetandcowpeas.png";
import ricebeans from "../assets/ricebeans.png";
import poshomeat from "../assets/poshmeat.png";
import { NavLink } from 'react-router';
import { useEffect, useRef, useState } from 'react';

/* ── Scroll-reveal hook ── */
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

/* ── Reusable reveal wrapper ── */
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

function Home() {
  const destination = [
    { title: "Milk Shake", image: milkshake, description: "It is so sweet and testy" },
    { title: "Lemon Juice", image: lemonjuice, description: "It is good for cough and flue" },
    { title: "Hot Chocolate", image: HotChocolate2, description: "It is 100% better than other chocolate" },
    { title: "Iced Tea", image: icedtea, description: "It is good for boosting the immunity of the body" },
    { title: "Soda", image: sodas, description: "It is good when you have a snack" },
    { title: "Water", image: water, description: "It is good when you feel thirsty" }
  ];

  const foods = [
    {
      title: "Chicken soup with smashed Irish potatoes",
      image: Chickensoupirish,
      description: "Zion's Chicken soup with smashed Irish potatoes is an exceptionally comforting and flavorful dish that blends a savory, deeply satisfying chicken broth with tender, buttery smashed Irish potatoes.",
      tags: ["I just love it"]
    },
    {
      title: " Matooke and G-nuts",
      image: mattokegnuts,
      description: "Zion's Matooke and G-nuts is a deeply authentic and mouthwatering traditional favorite, featuring soft, perfectly steamed green bananas drenched in a rich, creamy, and savory groundnut sauce.",
      tags: ["This is incredible"]
    },
    {
      title: " Sweet potato with Cow-peas",
      image: sweetandcowpeas,
      description: "Zion's Sweet potato with Cow-peas is a wonderfully wholesome and nutritious combination that pairs naturally sweet, tender sweet potatoes with savory, well-seasoned cow-peas.",
      tags: ["This is so delicious"]
    },
    {
      title: " Rice and Beans",
      image: ricebeans,
      description: "Zion's Rice and Beans is a classic, deeply comforting dish featuring fluffy, perfectly steamed rice served alongside a rich and savory bean stew."
    },
    {
      title: " Posho with meat",
      image: poshomeat,
      description: "Zion's Posho with meat is a supremely filling and satisfying local favorite, combining warm, smooth, freshly prepared maize meal (posho) with tender, succulent, and richly spiced meat"
    }
  ];

  const marqueeItems = [
    "Freshly Made", "★", "Local & International", "★", "Zion Coffee Restaurant",
    "★", "Ntinda · Victory City Church", "★", "Taste the Difference", "★"
  ];

  return (
    <>
      {/* ── Global animated keyframes ── */}
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
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          to { transform: rotate(360deg); }
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
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }
        .animate-spin-slow { animation: spinSlow 14s linear infinite; }
      `}</style>

      <div className="min-h-screen bg-[#0d1414] overflow-x-hidden relative">

        {/* ── Animated background layers ── */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1414] via-[#1a2727] to-[#0d1414] animate-gradient"></div>
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
                <span className="text-3xl font-bold bg-linear-to-r from-[#00ffc3] via-[#7ae9ff] to-[#b28aff] bg-clip-text text-transparent animate-shimmer-text">
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
                        isActive
                          ? "text-[#00ffc3]"
                          : "text-gray-300 hover:text-white"
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
        <div className="relative z-20 w-full overflow-hidden bg-gradient-to-r from-[#1a2727] via-[#0f1a1a] to-[#1a2727] border-y border-[#00ffc3]/10 py-3 mt-2">
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
        <div className="bg-transparent text-white w-auto relative z-10">

          {/* Hero heading */}
          <Reveal>
            <div className="space-y-0 p-10 px-4 py-0 mt-8 items-center justify-center flex flex-col lg:flex-row w-auto gap-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans uppercase p-4 text-center bg-gradient-to-r from-[#00ffc3] via-[#7ae9ff] to-[#b28aff] bg-clip-text text-transparent animate-shimmer-text leading-tight">
                Best foods we deal in:
              </h1>
              <h2 className="text-xl md:text-2xl font-medium font-serif p-5 text-center text-gray-300">
                Just make an order and leave the rest to us.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="p-4 text-center w-auto">
              <h2 className="text-4xl font-medium font-mono p-5 uppercase animate-float inline-block">
                Who we are!
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="px-6 p-5 justify-center items-center w-auto text-center text-xl md:text-2xl font-sans font-semibold max-w-3xl mx-auto text-gray-200">
              <p>
                We are Zion Coffee Restaurant located at Victory City Church Ntinda.
                <br />
                <span className="text-[#00ffc3]">
                  We have all kinds of foods starting from local foods to International foods
                </span>
              </p>
            </div>
          </Reveal>

          {/* ── Drinks section ── */}
          <div className="p-2 w-auto">
            <Reveal>
              <p className="text-2xl font-mono font-extralight text-center text-gray-300">
                We also have Different kinds of drinks including:
              </p>
            </Reveal>

            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-6">
              {destination.map((destination, index) => (
                <Reveal key={destination.title} delay={index * 100}>
                  <article className="group p-3 w-auto mx-auto">
                    <div className="relative overflow-hidden w-auto justify-center items-center mx-auto grid rounded-2xl">
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="object-cover h-56 w-full sm:w-72 shrink-0 rounded-2xl cursor-pointer transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Number badge */}
                      <div className="absolute top-3 left-3 h-9 w-9 rounded-full bg-[#00ffc3]/90 text-[#0d1414] flex items-center justify-center font-bold text-sm shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                        0{index + 1}
                      </div>
                    </div>

                    <div className="space-y-1 w-auto mt-4 p-2">
                      <h1 className="text-center font-serif font-bold text-2xl transition-colors duration-300 group-hover:text-[#00ffc3]">
                        {destination.title}
                      </h1>
                      <p className="text-center font-mono font-medium text-gray-400">
                        {destination.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-600/50 w-full my-6"></div>

          {/* ── Local foods section ── */}
          <div className="p-10 w-auto max-w-7xl mx-auto">
            <Reveal>
              <p className="text-2xl font-mono font-medium p-5 text-center text-gray-200">
                We also have different types of local Foods including:
              </p>
            </Reveal>

            <div className="relative w-auto space-y-12 mt-6">
              {foods.map((foods, index) => (
                <Reveal key={foods.title} delay={index * 100}>
                  <article className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}>
                    <div className="relative w-full md:w-1/2 flex justify-center">
                      <div className="relative inline-block overflow-hidden rounded-2xl">
                        <img
                          src={foods.image}
                          alt={foods.title}
                          className="object-cover h-64 w-80 sm:w-96 rounded-2xl cursor-pointer transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {(foods.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#00ffc3]/30 bg-[#0d1414]/90 px-4 py-1 text-sm text-[#00ffc3] shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-gradient-to-br from-[#00ffc3] to-[#7ae9ff] text-[#0d1414] flex items-center justify-center font-bold shadow-lg animate-glow">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left px-4">
                      <h1 className="font-serif font-bold text-2xl md:text-3xl mb-3 transition-colors duration-300 group-hover:text-[#00ffc3]">
                        {foods.title}
                      </h1>
                      <p className="font-mono font-medium text-gray-400 leading-relaxed">
                        {foods.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Testimonials ── */}
          <div className="p-10 w-auto max-w-7xl mx-auto">
            <Reveal>
              <h3 className="text-3xl font-sans font-medium text-center p-5 bg-gradient-to-r from-[#00ffc3] to-[#b28aff] bg-clip-text text-transparent animate-shimmer-text">
                Here is some feedback from our clients who have tested our menus:
              </h3>
            </Reveal>

            {[
              {
                img: MukiM,
                name: "Moses Mukama",
                quote: "Ever since I started eating from this place, I've never changed to another place since Zion coffee gives care to it's customers.",
                tag: null
              },
              {
                img: MosesL,
                name: "Moses Lubwama",
                quote: "Zion's food tastes so delicious and more people should try it.",
                tag: "Customer review"
              },
              {
                img: Linda,
                name: "Linda Namirimu",
                quote: "This is so amazing because of the care they give customers, the love and company.",
                tag: null
              }
            ].map((c, i) => (
              <Reveal key={c.name} delay={i * 120}>
                <div className="p-5 grid md:flex gap-6 items-center justify-center text-center md:text-left mt-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-[#00ffc3]/30 transition-colors duration-500 group">
                  <div className="relative mx-auto md:mx-0">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="h-40 w-40 rounded-full object-cover shadow-xl border-2 border-[#00ffc3]/40 p-1 bg-[#010e0e] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
                    />
                    {c.tag && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-indigo-400/20 bg-indigo-950/90 px-3 py-1 text-xs text-indigo-200 shadow">
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <div className="mx-auto md:mx-0 max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-mono font-medium mb-2 text-[#00ffc3]">
                      {c.name}
                    </h2>
                    <p className="text-lg font-extralight font-mono text-gray-300 leading-relaxed">
                      {c.quote}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── Footer marquee ── */}
          <div className="w-full overflow-hidden bg-gradient-to-r from-[#0d1414] via-[#1a2727] to-[#0d1414] border-t border-[#00ffc3]/10 py-4 mt-10">
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
      </div>
    </>
  );
}

export default Home;