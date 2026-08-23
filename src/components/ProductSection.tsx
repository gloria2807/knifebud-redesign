import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductSection() {
  return (
    <section id="shop" style={{ padding: 'var(--space-9) 0 var(--space-7)' }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 20,
          flexWrap: 'wrap',
          marginBottom: 36,
        }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Shop</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.4vw, 40px)', marginTop: 10 }}>
              Fresh meat options, updated{' '}
              <span className="italic-accent" style={{ color: 'var(--kb-coral)', fontWeight: 500 }}>
                regularly.
              </span>{' '}
            </h2>
          </motion.div>
          <a
            href="/catalog"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontWeight: 700,
              fontSize: 15,
              color: 'var(--kb-brown-900)',
              borderBottom: '2px solid var(--kb-coral)',
              paddingBottom: 2,
            }}
          >
            See full catalog
            <ArrowRight size={16} />
          </a>
        </div>

        <div
          className="product-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 20,
          }}
        >
          {products.slice(0, 8).map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
  @media (max-width: 1100px) {
    .product-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 760px) {
    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 12px !important;
    }
  }

  @media (max-width: 540px) {
    .product-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px !important;
    }
  }
`}</style>
    </section>
  );
}
