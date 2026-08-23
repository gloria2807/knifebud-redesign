import { FaMedium, FaWhatsapp } from 'react-icons/fa';

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const COLUMNS = [
  {
    title: 'Contact Us',
    links: [
      { label: 'support@knifebud.com', href: 'mailto:support@knifebud.com' },
      { label: '+234 811 4444 333', href: 'https://wa.me/2348114444333' },
      { label: 'No 2 Olugbesan, Allen, Ikeja', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: 'https://www.knifebud.com/privacy' },
      { label: 'Terms of Service', href: 'https://www.knifebud.com/terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--kb-brown-900)', color: 'var(--kb-white)', padding: '56px 0 28px' }}>
      <div className="container footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 40,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22 }}>
          <img
            src="/knifebud.png"
            alt="KnifeBud — a product of MeatSqueezy"
            style={{
              width: 100,
              height: 'auto',
              display: 'block',
            }}
          />
          </div>
          <p style={{ marginTop: 14, color: 'rgba(255,253,249,0.6)', fontSize: 14.5, lineHeight: 1.6, maxWidth: 300 }}>
            Fresh meat and knife sharpening, delivered across Lagos. Order on the
            site or on WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            <a
              href="https://medium.com/@knifebudng"
              target="_blank"
              rel="noreferrer"
              aria-label="KnifeBud on Medium"
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(255,253,249,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <FaMedium />
            </a>
            <a
              href="https://instagram.com/knifebudng"
              target="_blank"
              rel="noreferrer"
              aria-label="KnifeBud on Instagram"
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(255,253,249,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/2348114444333"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with Sarah on WhatsApp"
              style={{
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(255,253,249,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <FaWhatsapp size={17} />
            </a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 16 }}>{col.title}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{ fontSize: 14.5, color: 'rgba(255,253,249,0.7)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="container"
        style={{
          marginTop: 44,
          paddingTop: 22,
          borderTop: '1px solid rgba(255,253,249,0.12)',
          fontSize: 13,
          color: 'rgba(255,253,249,0.45)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <span>© {new Date().getFullYear()} KnifeBud. Lagos, Nigeria.</span>
        <span>Delivering across Lagos, 7 days a week.</span>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; margin-bottom: 8px; }
        }
      `}</style>
    </footer>
  );
}
