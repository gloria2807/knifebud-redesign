import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Products', href: '/catalog' },
  { label: 'Knife Sharpening', href: '#sharpening' },
  { label: 'Become a Rider', href: 'https://tally.so/r/QKr6Op' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [chatHovered, setChatHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(251, 244, 233, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--kb-line)'
          : '1px solid transparent',
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
    >
      {showAnnouncement && (
        <div
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f7e9e5',
            color: 'var(--kb-brown-700)',
            fontSize: 12,
            fontWeight: 500,
            position: 'relative',
          }}
        >
          <span>
            🍖 <strong>Knifebud</strong> is a Product of Meat Squeezy Limited
          </span>

          <button
            aria-label="Dismiss announcement"
            onClick={() => setShowAnnouncement(false)}
            style={{
              position: 'absolute',
              right: 24,
              top: '50%',
              transform: 'translateY(-50%)',
              border: 'none',
              background: 'transparent',
              fontSize: 18,
              lineHeight: 1,
              cursor: 'pointer',
              color: 'var(--kb-brown-700)',
              padding: 4,
            }}
          >
            ×
          </button>
        </div>
      )}
      <nav
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <a
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/knifebudlogo.png"
            alt="KnifeBud — a product of MeatSqueezy"
            style={{
              width: 210,
              height: 'auto',
              display: 'block',
            }}
          />
        </a>

        <div
          style={{ display: 'flex', alignItems: 'center', gap: 40 }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontWeight: 600,
                fontSize: 15,
                color: 'var(--kb-brown-700)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* rest of your navbar */}

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="https://wa.me/2348114444333"
            className="btn btn-dark nav-cta"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setChatHovered(true)}
            onMouseLeave={() => setChatHovered(false)}
            style={{
              background: chatHovered
                ? 'var(--kb-coral)'
                : 'var(--kb-brown-700)',
              color: '#fff',
              transform: chatHovered ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: chatHovered
                ? '0 6px 18px rgba(0, 0, 0, 0.12)'
                : 'none',
              transition:
                'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <FaWhatsapp
              size={16}
              strokeWidth={2.5}
              style={{
                transform: chatHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            />
            Chat with Sarah (AI)
          </a>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nav-toggle"
            style={{
              display: 'none',
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'var(--kb-white)',
              border: '1px solid var(--kb-line-strong)',
            }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              overflow: 'hidden',
              background: 'rgba(251, 244, 233, 0.92)',
              borderTop: '1px solid var(--kb-line)',
            }}
            className="nav-mobile-panel"
          >
            <div
              className="container"
              style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 32px' }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    padding: '14px 0',
                    borderBottom: '1px solid var(--kb-line)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/2340000000000"
                className="btn btn-primary"
                style={{ marginTop: 20, justifyContent: 'center' }}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={16} strokeWidth={2.5} />
                Chat with Sarah (AI)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-toggle { display: inline-flex !important; }
        }
        @media (max-width: 520px) {
          .nav-cta { display: none !important; }
        }
        @media (min-width: 861px) {
          .nav-mobile-panel { display: none !important; }
        }
      `}</style>
    </header>
  );
}
