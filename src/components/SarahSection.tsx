import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const CHAT = [
  { from: 'user', text: 'Hi, I need 2kg goat meat for tomorrow' },
  { from: 'sarah', text: 'Good afternoon! We have that. Should I cut it into medium pieces as usual?' },
  { from: 'user', text: 'Yes please, and add 1kg beef cubes' },
  { from: 'sarah', text: "Noted. That's ₦16,000 + ₦6,500 = ₦22,500. Delivery to Lekki Phase 1, right?" },
  { from: 'user', text: 'Yes' },
  { from: 'sarah', text: 'Order confirmed ✅ You\'ll get it between 10am–12pm tomorrow.' },
];

export default function SarahSection() {
  return (
    <section style={{ padding: 'var(--space-9) 0' }}>
      <div className="container sarah-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Prefer WhatsApp?</span>
          <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 10 }}>
            You can order by chatting with{' '}
            <span className="italic-accent" style={{ color: 'var(--kb-coral)' }}>Sarah</span>.
          </h2>
          <p style={{ marginTop: 18, fontSize: 16.5, color: 'var(--kb-brown-700)', lineHeight: 1.65, maxWidth: 460 }}>
            Some people just don't want to open an app. Send Sarah a message with
            what you need, ask for recommendations, confirm the price and she'll get it moving.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 26 }}>
            {['Same prices as the website', 'Confirms your order before it ships', 'Answers in minutes'].map((line) => (
              <div key={line} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: 'var(--kb-coral-tint)', color: 'var(--kb-coral-dark)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Check size={13} strokeWidth={3} />
                </span>
                <span style={{ fontSize: 15, color: 'var(--kb-brown-700)' }}>{line}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/2348114444333"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 30, fontSize: 16, padding: '15px 28px' }}
          >
            <FaWhatsapp size={17} strokeWidth={2.5} />
            Chat with Sarah (AI)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          style={{
            background: '#0E1A14',
            borderRadius: 22,
            padding: '20px 16px',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CHAT.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.12 }}
                style={{
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '78%',
                  background: msg.from === 'user' ? '#DCF8C6' : '#FFFFFF',
                  color: '#1a1a1a',
                  padding: '9px 13px',
                  borderRadius: 12,
                  fontSize: 14.5,
                  lineHeight: 1.45,
                  boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                }}
              >
                {msg.text}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .sarah-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
