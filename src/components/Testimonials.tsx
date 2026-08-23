import { motion } from 'framer-motion';

// Placeholder testimonials — swap for real customer quotes before launch.
const TESTIMONIALS = [
  {
    quote: "Okay Okay this is really interesting... I got the chicken and it’s actually very fresh.",
    name: 'Seye',
    location: 'Lekki Phase 1',
  },
  {
    quote: 'I was skeptical at first but wow the beef cuts are insanely clean and well packed.',
    name: 'Amaka',
    location: 'Gbagada',
  },
  {
    quote: 'This saved me so much stress. It feels like buying directly from a proper butcher.',
    name: 'Tunde',
    location: 'Lekki',
  },
];

export default function Testimonials() {
  return (
    <section id="about" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 32 }}
        >
          <span className="eyebrow">From customers</span>
          <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 36px)', marginTop: 10 }}>
            What people say after trying it
          </h2>
        </motion.div>

        <div className="testi-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                margin: 0,
                background: 'var(--kb-white)',
                border: '1px solid var(--kb-line)',
                borderRadius: 'var(--r-md)',
                padding: 24,
              }}
            >
              <blockquote style={{
                margin: 0,
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontSize: 17,
                lineHeight: 1.5,
                color: 'var(--kb-brown-900)',
              }}>
                "{t.quote}"
              </blockquote>
              <figcaption style={{ marginTop: 16, fontSize: 13.5, color: 'var(--kb-brown-500)', fontStyle: 'normal', fontFamily: 'var(--font-body)' }}>
                {t.name} · {t.location}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
