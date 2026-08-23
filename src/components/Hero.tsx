import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        paddingTop: 'clamp(32px, 6vw, 64px)',
        overflow: 'hidden',
      }}
    >
      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 0.86fr',
        gap: 48,
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >

          <h1 style={{
            fontSize: 'clamp(38px, 5.4vw, 64px)',
            marginTop: 18,
            fontWeight: 800,
          }}>
            The easier way to buy meat{' '}
            <span className="italic-accent" style={{ color: 'var(--kb-coral)', fontWeight: 500 }}>
              for your kitchen.
            </span>{' '}
          </h1>

          <p style={{
            marginTop: 22,
            fontSize: 18,
            lineHeight: 1.6,
            color: 'var(--kb-brown-700)',
            maxWidth: 460,
          }}>
            Order beef, goat meat, chicken and more from your phone, and it gets to
            your door already cleaned and cut the way you like it.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 34, flexWrap: 'wrap' }}>
            <a href="#shop" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 30px' }}>
              Shop meat
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
            <a
              href="https://wa.me/2348114444333"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: 16, padding: '16px 28px' }}
            >
              <FaWhatsapp size={17} strokeWidth={2.5} />
              Chat with Sarah (AI)
            </a>
          </div>

          <div style={{ display: 'flex', gap: 28, marginTop: 44, flexWrap: 'wrap' }}>
            {[
              ['3,116', 'households reached'],
              ['45 min', 'average delivery'],
              ['4.8/5', 'customer rating'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>
                  {num}
                </div>
                <div style={{ fontSize: 13.5, color: 'var(--kb-brown-500)', marginTop: 2 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
  style={{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  }}
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  <img
    src="/knifebud-hero-3d.png"
    alt="Fresh beef, chicken, turkey, fish and eggs from KnifeBud"
    style={{
      width: '100%',
      maxWidth: 650,
      height: 'auto',
      display: 'block',
      objectFit: 'contain',
    }}
  />
</motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-float-card {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
