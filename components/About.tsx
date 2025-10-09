import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">About</div>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Built by educators & technicians</h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
          <p className="text-lg text-slate-300">
            ElevatED Automotive Solutions helps transportation programs and industry teams apply AI where it actually moves the needle. We pair real-world shop experience with modern tooling to make training faster, clearer, and more engaging.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-slate-400">
            <li>ASE-aligned content and assessments</li>
            <li>Interactive, mentor-guided lessons and apps</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;