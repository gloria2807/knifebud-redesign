import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { products, type ProductCategory } from '../data/products';
import CatalogProductCard from './CatalogProductCard';

const CATEGORIES: Array<'All' | ProductCategory> = [
  'All',
  'Beef',
  'Chicken',
  'Turkey',
  'Fish',
  'Eggs',
  'Goat',
];

export default function Catalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] =
    useState<'All' | ProductCategory>('All');

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === 'All' || product.category === category;

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.cut.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <main>
      <section
        style={{
          padding: 'clamp(48px, 7vw, 88px) 0 var(--space-9)',
        }}
      >
        <div className="container">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 24,
                flexWrap: 'wrap',
              }}
            >
              <div>

                <h1
                  style={{
                    fontSize: 'clamp(36px, 5vw, 58px)',
                    lineHeight: 1,
                    marginTop: 12,
                    letterSpacing: '-0.04em',
                  }}
                >
                  Our Protein{' '}
                  <span
                    className="italic-accent"
                    style={{
                      color: 'var(--kb-coral)',
                      fontWeight: 500,
                    }}
                  >
                    Catalogue
                  </span>
                </h1>

                <p
                  style={{
                    maxWidth: 580,
                    marginTop: 16,
                    color: 'var(--kb-brown-500)',
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  Live Prices | Fresh cuts; Just for you
                </p>
              </div>

              <div
                style={{
                  color: 'var(--kb-brown-500)',
                  fontSize: 13,
                }}
              >
                {filteredProducts.length} of {products.length} products
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                position: 'relative',
                flex: 1,
                maxWidth: 520,
              }}
            >
              <Search
                size={17}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--kb-brown-500)',
                  pointerEvents: 'none',
                }}
              />

              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search beef, chicken, fish..."
                style={{
                  width: '100%',
                  height: 46,
                  boxSizing: 'border-box',
                  border: '1px solid var(--kb-line)',
                  borderRadius: 'var(--r-pill)',
                  background: 'var(--kb-white)',
                  padding: '0 42px',
                  outline: 'none',
                  fontSize: 13.5,
                  color: 'var(--kb-brown-900)',
                }}
              />

              {search && (
                <button
                  onClick={clearSearch}
                  aria-label="Clear search"
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 0,
                    background: 'transparent',
                    color: 'var(--kb-brown-500)',
                    cursor: 'pointer',
                  }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

          </div>

          {/* Categories */}
          <div
            className="catalog-filters"
            style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              marginTop: 18,
              paddingBottom: 22,
              borderBottom: '1px solid var(--kb-line)',
            }}
          >
            {CATEGORIES.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  style={{
                    border: active
                      ? '1px solid var(--kb-brown-900)'
                      : '1px solid var(--kb-line)',
                    background: active
                      ? 'var(--kb-brown-900)'
                      : 'var(--kb-white)',
                    color: active
                      ? 'var(--kb-white)'
                      : 'var(--kb-brown-700)',
                    borderRadius: 'var(--r-pill)',
                    padding: '9px 16px',
                    fontSize: 12.5,
                    fontWeight: 650,
                    cursor: 'pointer',
                    transition:
                      'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Products */}
          <div
            className="catalog-grid"
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(2, minmax(0, 1fr))',
              gap: 16,
              marginTop: 24,
            }}
          >
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(i * 0.025, 0.25),
                }}
              >
                <CatalogProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '80px 20px',
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  color: 'var(--kb-brown-900)',
                }}
              >
                Nothing found
              </h3>

              <p
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  color: 'var(--kb-brown-500)',
                }}
              >
                Try another product or category.
              </p>

              <button
                onClick={() => {
                  setSearch('');
                  setCategory('All');
                }}
                className="btn btn-primary"
                style={{
                  marginTop: 20,
                }}
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .catalog-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 540px) {
          .catalog-filters {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            padding-bottom: 16px !important;
            scrollbar-width: none;
          }

          .catalog-filters::-webkit-scrollbar {
            display: none;
          }

          .catalog-filters button {
            flex-shrink: 0;
          }
        }
      `}</style>
    </main>
  );
}