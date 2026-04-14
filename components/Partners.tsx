'use client';
import { motion } from 'framer-motion';
import { Building2, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

const PARTNERS = [
  {
    name: 'Strand Life Sciences',
    role: 'Sample Collection Partner',
    desc: 'Pan-India sample collection network powering Radiogenomes AI nationwide. Trusted leader in clinical diagnostics, translational medicine, and bioinformatics.',
    badge: 'PAN-INDIA',
    url: 'https://strandls.com',
    tags: ['Sample Collection', 'Clinical Diagnostics', 'Pan-India Network'],
  },
];

export function Partners() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="eyebrow mb-5 mx-auto">Trusted Partner Network</div>
          <h2 className="h-display text-4xl md:text-5xl text-white leading-tight">
            Powered by{' '}
            <span className="text-gradient">India's leading partners</span>.
          </h2>
          <p className="mt-6 text-slate-300 text-lg">
            We've partnered with India's most trusted names in genomic sample collection
            to ensure seamless, high-quality service across the country.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
          {PARTNERS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-8 md:p-10 hover:border-teal-400/50 hover:-translate-y-1 transition-all overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/10 transition-all" />

              <div className="relative flex flex-col md:flex-row gap-6 md:items-center">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <Building2 size={36} className="text-teal-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl md:text-3xl text-white font-semibold">
                      {p.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-300 uppercase tracking-widest">
                      <MapPin size={10} />
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-xs uppercase tracking-widest text-teal-400/80 font-semibold mb-3">
                    {p.role}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-teal-300 group-hover:text-teal-200 transition-colors">
                    <span>Visit website</span>
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 font-mono px-4 py-2 rounded-full border border-white/5">
            <ShieldCheck size={14} className="text-teal-400" />
            <span>Trusted Pan-India Sample Collection Network</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
