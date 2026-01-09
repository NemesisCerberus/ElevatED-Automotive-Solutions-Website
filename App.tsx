
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TriviaShowcase from './components/TriviaShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-gray-200 font-sans antialiased">
      <div className="relative isolate overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute left-[10%] top-[-10%] h-[600px] w-[1200px] rounded-full"
            style={{
              background: 'radial-gradient(1200px 600px at 10% -10%, rgba(79,70,229,.10), transparent 50%)'
            }}
          />
          <div 
            className="absolute right-[-20%] top-[10%] h-[500px] w-[1000px] rounded-full"
            style={{
              background: 'radial-gradient(1000px 500px at 110% 10%, rgba(34,211,238,.08), transparent 50%)'
            }}
          />
        </div>
        
        <Header />
        <main>
          <Hero />
          <Services />
          <TriviaShowcase />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
