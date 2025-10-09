
import React from 'react';
import type { Service } from '../types';

const servicesData: Service[] = [
  {
    category: 'Consulting',
    title: 'Strategic support',
    description: 'Facility audits, technician skill-gap analysis, ASE/NATEF alignment, instructional coaching, and service-process optimization.',
  },
  {
    category: 'Mentorship',
    title: 'Technicians & instructors',
    description: 'Career development, certification prep, diagnostic coaching, pedagogy support—virtual or on-site with progress tracking.',
  },
  {
    category: 'Virtual Academy',
    title: 'ASE-aligned courses',
    description: 'Interactive AI lessons, simulated diagnostics, adaptive feedback, and gamified challenges. Subscriptions and licensing available.',
  },
  {
    category: 'Digital Media',
    title: 'Webinars & tutorials',
    description: 'Live and recorded sessions, tool walkthroughs, troubleshooting guides—offered as pay-per-view, subscriptions, or bundles.',
  },
  {
    category: 'On-Site Training',
    title: 'Hands-on workshops',
    description: 'Custom training days for dealerships, shops, or districts with pre-training assessments and post-training evaluations.',
  },
   {
    category: 'Tech Integration',
    title: 'AI Tooling',
    description: 'Integrating custom AI solutions, diagnostic aids, and knowledge bases into your existing workflow for enhanced efficiency.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <article role="listitem" className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:bg-slate-800/60">
    <div className="inline-block rounded-md bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300" aria-hidden="true">
      {service.category}
    </div>
    <h4 className="mt-3 text-lg font-bold text-white">{service.title}</h4>
    <p className="mt-1 text-slate-400">{service.description}</p>
  </article>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-cyan-400">Services</div>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Five pillars, one partner</h3>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
            Book a consult
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {servicesData.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
