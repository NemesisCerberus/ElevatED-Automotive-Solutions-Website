import React from 'react';

const triviaImages = [
  { src: '/Trivia Gameplay 1.png', alt: 'ElevatED AI Trivia Professor - Question Screen' },
  { src: '/Trivia Gameplay 2.png', alt: 'ElevatED AI Trivia Professor - Answer Feedback' },
  { src: '/Trivia Gameplay 3.png', alt: 'ElevatED AI Trivia Professor - Detailed Explanations' },
  { src: '/Trivia Gameplay 4.png', alt: 'ElevatED AI Trivia Professor - Progress Tracking' },
  { src: '/Trivia Gameplay 5.png', alt: 'ElevatED AI Trivia Professor - Interactive Learning' },
  { src: '/Trivia Gameplay 6.png', alt: 'ElevatED AI Trivia Professor - ASE Practice' },
  { src: '/Trivia Gameplay 7.png', alt: 'ElevatED AI Trivia Professor - Performance Review' },
];

const TriviaShowcase: React.FC = () => {
  return (
    <section id="trivia" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">Virtual Academy</div>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">ElevatED AI Trivia Professor</h3>
          <p className="mt-4 text-lg text-slate-400 mx-auto max-w-3xl">
            Interactive AI-powered trivia gameplay designed to engage students and reinforce automotive concepts through gamified learning experiences.
          </p>
        </div>
        
        {/* Featured Image - First one larger */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50">
          <img 
            src={triviaImages[0].src}
            alt={triviaImages[0].alt}
            className="w-full h-auto"
          />
        </div>

        {/* Grid of remaining images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triviaImages.slice(1).map((image, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 transition hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-auto transition group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
          >
            Try the AI Trivia Professor
          </a>
        </div>
      </div>
    </section>
  );
};

export default TriviaShowcase;
