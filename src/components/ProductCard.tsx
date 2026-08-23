import { motion } from 'framer-motion';
import type { Product } from '../data/products';

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export default function ProductCard({ product }: { product: Product }) {
  const primary = product.variants[0];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18 }}
      style={{
        background: 'var(--kb-white)',
        borderRadius: 'var(--r-md)',
        overflow: 'hidden',
        border: '1px solid var(--kb-line)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        width: '100%',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1.15 / 1', overflow: 'hidden' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div
        style={{
          padding: '13px 13px 15px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minWidth: 0,
        }}
      >
        <h3
          style={{
            fontSize: 17,
            fontWeight: 700,
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: 13.5, color: 'var(--kb-brown-500)', marginTop: 4 }}>
          {product.cut}
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
          <div>
            <div style={{ fontSize: 12.5, color: 'var(--kb-brown-500)' }}>
              {primary.weight}
              {product.variants.length > 1 ? ` +${product.variants.length - 1} more` : ''}
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, marginTop: 2 }}>
              {formatNaira(primary.price)}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
