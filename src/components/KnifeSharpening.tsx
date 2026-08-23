import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function KnifeSharpening() {
  return (
    <section id="sharpening" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          style={{
            background: 'var(--kb-brown-900)',
            borderRadius: 28,
            padding: 'clamp(32px, 5vw, 64px)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 40,
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
          className="sharpen-grid"
        >
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: 'var(--kb-white)', fontSize: 'clamp(26px, 3.2vw, 38px)', marginTop: 10 }}>
              Need your knife sharpened?
            </h2>
            <p style={{ color: 'rgba(255,253,249,0.75)', marginTop: 16, fontSize: 16, lineHeight: 1.6, maxWidth: 440 }}>
             If you have to press the knife harder than the tomato, the knife is no longer doing its job. 
             <br/> <br/>Knifebud sharpens your kitchen knives right at your doorstep and yes, we can also deliver fresh meat while we’re at it.
             No market stress. No dull blades.
            </p>
            <a
              href="https://wa.me/2348114444333"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ marginTop: 26, fontSize: 15.5, padding: '14px 26px' }}
            ><FaWhatsapp size={16} />
              Chat with Sarah to book
              <ArrowRight size={16} />
            </a>
          </div>

          <div style={{
            borderRadius: 20,
            overflow: 'hidden',
            aspectRatio: '4 / 3',
          }}>
            <img
              src="https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=900&auto=format&fit=crop"
              alt="Kitchen knife being sharpened on a whetstone"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .sharpen-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
