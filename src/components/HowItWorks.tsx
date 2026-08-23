import { motion } from 'framer-motion';

const STEPS = [
  {
    n: '01',
    title: 'Choose what you need',
    body: 'Pick your cuts and how much you want, from beef to fish.',
  },
  {
    n: '02',
    title: 'Place your order',
    body: 'Send Sarah a message on WhatsApp or Reach out to us on Instagram',
  },
  {
    n: '03',
    title: 'We prepare and deliver',
    body: "It's cleaned, cut and on its way to you, usually within the hour.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: 'var(--space-8) 0', background: 'var(--kb-cream-deep)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <span className="eyebrow">How it works</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 10 }}>
            Three steps is all you need to take
          </h2>
        </motion.div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
        }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 40,
                color: 'var(--kb-coral)',
              }}>
                {step.n}
              </div>
              <h3 style={{ fontSize: 20, marginTop: 12, fontWeight: 700 }}>{step.title}</h3>
              <p style={{ marginTop: 8, color: 'var(--kb-brown-700)', lineHeight: 1.6, fontSize: 15 }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
