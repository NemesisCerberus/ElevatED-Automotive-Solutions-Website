
import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you'd handle success/error based on API response
    setStatus('success');
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => setStatus('idle'), 5000); // Reset after 5 seconds
  };

  const statusMessages: { [key in FormStatus]: string } = {
    idle: '',
    sending: 'Sending...',
    success: "Thanks! We'll be in touch shortly.",
    error: 'Something went wrong. Please try again.'
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
          <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">Get started</div>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">Tell us what you’re building</h3>
          <p className="mt-4 text-slate-400">Share a few details and we’ll reply with next steps and a suggested kickoff plan.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Your name</label>
              <input 
                id="name"
                name="name" 
                placeholder="Your name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" 
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="What do you want to build?" 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>
            <button type="submit" className="w-full rounded-xl border border-transparent bg-gradient-to-b from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-cyan-500/30 disabled:opacity-50" disabled={status === 'sending'}>
              Send message
            </button>
            <div id="form-status" aria-live="polite" className="pt-2 text-center text-sm text-slate-400 h-6">
              {statusMessages[status]}
            </div>
          </form>
        </div>
        <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
                <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">Why us</div>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">Practical, fast, and reliable</h3>
                 <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-400">
                    <li>We build with the tools you already use.</li>
                    <li>We ship small wins quickly, then scale.</li>
                    <li>We document everything for easy hand-off.</li>
                </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8" aria-label="Contact details">
                 <div className="space-y-4">
                    <div>
                        <b className="text-white">Email</b><br/>
                        <a href="mailto:hello@elevatedautosolutions.com" className="text-slate-300 hover:text-cyan-300">hello@elevatedautosolutions.com</a>
                    </div>
                    <div>
                        <b className="text-white">Location</b><br/>
                        <span className="text-slate-300">Minnesota, USA</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
