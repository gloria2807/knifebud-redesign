export interface ProductVariant {
  weight: string;
  price: number;
}

export type ProductCategory =
  | 'Beef'
  | 'Chicken'
  | 'Turkey'
  | 'Fish'
  | 'Eggs'
  | 'Goat';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  cut: string;
  image: string;
  tag?: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  // ─────────────────────────────
  // BEEF
  // ─────────────────────────────

  {
    id: 'minced-beef',
    name: 'Minced Beef',
    category: 'Beef',
    cut: 'Fresh minced beef, finely prepared and perfect for sauces, fillings, meatballs, and everyday cooking.',
    image: '/products/mincedmeat.jpg',
    variants: [
      { weight: '1kg', price: 9750 },
    ],
  },

  {
    id: 'pure-beef',
    name: 'Pure Beef',
    category: 'Beef',
    cut: 'Fresh pure beef, cleanly prepared and perfect for a wide range of hearty home meals.',
    image: '/products/purebeef.jpg',
    variants: [
      { weight: '1kg', price: 9360 },
    ],
  },

  {
    id: 'shredded-beef',
    name: 'Shredded Beef',
    category: 'Beef',
    cut: 'Soft shredded beef, cleanly prepared and ideal for stir-fries, sauces, stews, and quick meals.',
    image: '/products/shreddedbeef.jpg',
    variants: [
      { weight: '1kg', price: 9672 },
    ],
  },

  {
    id: 'cow-leg',
    name: 'Cow Leg',
    category: 'Beef',
    cut: 'Fresh cow leg cuts, rich and gelatinous, perfect for soups, pepper soups, and slow-cooked meals.',
    image: '/products/cowleg.jpg',
    variants: [
      { weight: '1kg', price: 10285 },
    ],
  },

  {
    id: 'cow-head',
    name: 'Cow Head',
    category: 'Beef',
    cut: 'Carefully cleaned cow head cuts, rich in flavor and perfect for traditional soups and hearty dishes.',
    image: '/products/cowhead.jpg',
    variants: [
      { weight: '1kg', price: 11875 },
    ],
  },

  {
    id: 'cow-tail',
    name: 'Cow Tail',
    category: 'Beef',
    cut: 'Fresh cow tail cuts, tender and flavorful, perfect for soups, stews, and slow-cooked meals.',
    image: '/products/cowtail.jpg',
    variants: [
      { weight: '1kg', price: 10285 },
    ],
  },

  {
    id: 'brisket-bone',
    name: 'Brisket Bone',
    category: 'Beef',
    cut: 'Flavorful brisket bones, freshly cut and ideal for deep, rich soups, broths, and traditional cooking.',
    image: '/products/brisketbone.jpg',
    variants: [
      { weight: '1kg', price: 7260 },
    ],
  },

  {
    id: 'cow-share-1-4',
    name: 'Cow Share (1/4)',
    category: 'Beef',
    cut: 'Quarter cow share, freshly processed and well portioned for families looking to stock their freezer.',
    image: '/products/cowshare.jpg',
    variants: [
      { weight: '1 pack', price: 381120 },
    ],
  },

  {
    id: 'cow-share-1-8',
    name: 'Cow Share (1/8)',
    category: 'Beef',
    cut: 'An affordable shared cow option, giving you fresh beef portions at a great value.',
    image: '/products/cowshare.jpg',
    variants: [
      { weight: '1 pack', price: 190560 },
    ],
  },

  {
    id: 'cow-share-1-2',
    name: 'Cow Share (1/2)',
    category: 'Beef',
    cut: 'A half cow portion, freshly processed and perfect for families, bulk cooking, and shared purchases.',
    image: '/products/cowshare12.jpg',
    variants: [
      { weight: '1 pack', price: 762240 },
    ],
  },

  {
    id: 'cow-share-1-32',
    name: 'Cow Share (1/32)',
    category: 'Beef',
    cut: 'A smaller cow share, freshly prepared and conveniently portioned for stocking your kitchen.',
    image: '/products/cowshare.jpg',
    variants: [
      { weight: '1 pack', price: 49650 },
    ],
  },

  // ─────────────────────────────
  // CHICKEN
  // ─────────────────────────────

  {
    id: 'chicken-laps',
    name: 'Chicken Laps',
    category: 'Chicken',
    cut: 'Juicy chicken laps, cleanly prepared and ideal for frying, grilling, and hearty everyday cooking.',
    image: '/products/chickenlaps.jpg',
    variants: [
      { weight: '1kg', price: 7216 },
    ],
  },

  {
    id: 'chicken-fillet',
    name: 'Chicken Fillet',
    category: 'Chicken',
    cut: 'Boneless chicken fillets, clean and tender, perfect for stir-fries, grilling, sauces, and healthy meals.',
    image: '/products/chickenfillet.jpg',
    variants: [
      { weight: '1kg', price: 8228 },
    ],
  },

  {
    id: 'chicken-gizzard',
    name: 'Chicken Gizzard',
    category: 'Chicken',
    cut: 'Fresh chicken gizzards, cleanly prepared for peppered gizzard, stir-fries, and rich dishes.',
    image: '/products/chickengizzard.jpg',
    variants: [
      { weight: '1kg', price: 7865 },
    ],
  },

  {
    id: 'drumstick',
    name: 'Drumstick',
    category: 'Chicken',
    cut: 'Meaty chicken drumsticks, freshly prepared and perfect for grilling, frying, or cooking hearty home meals.',
    image: '/products/drumstick.jpg',
    variants: [
      { weight: '1kg', price: 7616 },
    ],
  },

  {
    id: 'chicken-wings',
    name: 'Chicken Wings',
    category: 'Chicken',
    cut: 'Tender chicken wings, freshly cut and perfect for frying, grilling, sauces, and delicious home meals.',
    image: '/products/chickenwings.jpg',
    variants: [
      { weight: '1kg', price: 7865 },
    ],
  },

  {
    id: 'chicken-mixed-cut',
    name: 'Chicken Mixed Cut',
    category: 'Chicken',
    cut: 'A balanced mix of chicken cuts, fresh and neatly portioned for soups, stews, frying, and easy home cooking.',
    image: '/products/chickenmixedcut.jpg',
    variants: [
      { weight: '1kg', price: 5808 },
    ],
  },

  {
    id: 'whole-chicken',
    name: 'Whole Chicken',
    category: 'Chicken',
    cut: 'Fresh whole chicken, clean and carefully prepared for roasting, frying, soups, and everyday family meals.',
    image: '/products/wholechicken.jpg',
    variants: [
      { weight: '1kg', price: 5687 },
    ],
  },

  // ─────────────────────────────
  // TURKEY
  // ─────────────────────────────

  {
    id: 'turkey-gizzard',
    name: 'Turkey Gizzard',
    category: 'Turkey',
    cut: 'Fresh turkey gizzards, carefully cleaned and perfect for stir-fries, peppered dishes, and rich meals.',
    image: '/products/turkeygizzard.jpg',
    variants: [
      { weight: '1kg', price: 7840 },
    ],
  },

  {
    id: 'turkey-wings',
    name: 'Turkey Wings',
    category: 'Turkey',
    cut: 'Large turkey wings, fresh and meaty, perfect for roasting, grilling, soups, and family meals.',
    image: '/products/turkeywings.jpg',
    variants: [
      { weight: '1kg', price: 9900 },
    ],
  },

  // ─────────────────────────────
  // FISH
  // ─────────────────────────────

  {
    id: 'panla-hake-fish',
    name: 'Panla (Hake) Fish',
    category: 'Fish',
    cut: 'Fresh hake fish, carefully cleaned and perfect for soups, stews, frying, and traditional dishes.',
    image: '/products/panlafish.jpg',
    variants: [
      { weight: '1kg', price: 5400 },
    ],
  },

  {
    id: 'titus',
    name: 'Titus',
    category: 'Fish',
    cut: 'Fresh titus fish, rich and flavorful, perfect for grilling, frying, sauces, and family meals.',
    image: '/products/titus.jpg',
    variants: [
      { weight: '1kg', price: 8654 },
    ],
  },

  {
    id: 'croaker-fish',
    name: 'Croaker Fish',
    category: 'Fish',
    cut: 'Fresh croaker fish, clean and flavorful, perfect for grilling, frying, soups, and delicious seafood meals.',
    image: '/products/croakerfish.jpg',
    variants: [
      { weight: '1kg', price: 6050 },
    ],
  },

  {
    id: 'kote-fish',
    name: 'Kote Fish',
    category: 'Fish',
    cut: 'Fresh kote fish, tender and flavorful, ideal for frying, grilling, and everyday seafood meals.',
    image: '/products/kote.jpg',
    variants: [
      { weight: '1kg', price: 6050 },
    ],
  },

  // ─────────────────────────────
  // EGGS
  // ─────────────────────────────

  {
    id: 'eggs',
    name: 'Eggs',
    category: 'Eggs',
    cut: 'Fresh farm eggs, carefully selected and perfect for breakfast, baking, and everyday kitchen use.',
    image: '/products/eggs.jpg',
    variants: [
      { weight: '1kg', price: 6720 },
    ],
  },

  // ─────────────────────────────
  // GOAT
  // ─────────────────────────────

  {
    id: 'boneless-goat-meat',
    name: 'Boneless Goat Meat',
    category: 'Goat',
    cut: 'Freshly cut deboned goat meat, clean and well-prepared for asun, asun jollof rice, stew, and hearty traditional meals.',
    image: '/products/bonelessgoatmeat.jpg',
    variants: [
      { weight: '1kg', price: 14900 },
    ],
  },

  {
    id: 'goat-meat',
    name: 'Goat Meat',
    category: 'Goat',
    cut: 'Freshly cut goat meat, clean and well-prepared for pepper soup, stews, and hearty traditional meals.',
    image: '/products/goatmeat.jpg',
    variants: [
      { weight: '1kg', price: 8400 },
    ],
  },
];