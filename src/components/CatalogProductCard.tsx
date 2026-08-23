import { motion } from 'framer-motion';
import type { Product } from '../data/products';

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString('en-NG')}`;
}

export default function CatalogProductCard({
  product,
}: {
  product: Product;
}) {
  const primary = product.variants[0];

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '132px minmax(0, 1fr)',
        gap: 18,
        padding: 14,
        background: 'var(--kb-white)',
        border: '1px solid var(--kb-line)',
        borderRadius: 'var(--r-md)',
        minWidth: 0,
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <div
        style={{
          width: 132,
          height: 132,
          borderRadius: 'calc(var(--r-md) - 4px)',
          overflow: 'hidden',
          background: 'var(--kb-cream)',
          flexShrink: 0,
        }}
      >
        <motion.img
          src={product.image}
          alt={product.name}
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* Information */}
      <div
        style={{
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2px 2px 2px 0',
        }}
      >
        <div>
          <span
            style={{
              display: 'inline-block',
              fontSize: 10.5,
              fontWeight: 700,
              color: 'var(--kb-coral-dark)',
              background: 'rgba(242, 101, 61, 0.09)',
              padding: '4px 8px',
              borderRadius: 'var(--r-pill)',
              marginBottom: 8,
            }}
          >
            {product.category}
          </span>

          <h3
            style={{
              fontSize: 17,
              fontWeight: 750,
              lineHeight: 1.2,
              margin: 0,
              color: 'var(--kb-brown-900)',
            }}
          >
            {product.name}
          </h3>

          <p
            style={{
              fontSize: 12.5,
              lineHeight: 1.45,
              color: 'var(--kb-brown-500)',
              marginTop: 6,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {product.cut}
          </p>
        </div>

        <div
          style={{
            marginTop: 12,
            display: 'flex',
            alignItems: 'baseline',
            gap: 5,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 18,
              color: 'var(--kb-coral-dark)',
            }}
          >
            {formatNaira(primary.price)}
          </span>

          <span
            style={{
              fontSize: 11.5,
              color: 'var(--kb-brown-500)',
            }}
          >
            / {primary.weight}
          </span>
        </div>
      </div>
    </motion.article>
  );
}