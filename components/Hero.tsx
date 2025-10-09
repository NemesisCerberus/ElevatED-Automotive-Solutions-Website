import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
            Elevating education • Service excellence • Mentorship
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-powered training and consulting for transportation programs.
          </h1>
          <p className="mt-6 text-lg text-slate-400">
            Elevating automotive education and service excellence through expert consulting, immersive training, and mentorship-driven innovation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-transparent bg-gradient-to-b from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-cyan-500/30">
              Start a project
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10">
              See services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;