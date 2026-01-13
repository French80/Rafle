import Fuse from 'fuse.js';
import { products } from '@/data/products';

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getProductsByRecipient(slug) {
  return products.filter((p) => p.recipients.includes(slug));
}

export function getProductsByOccasion(slug) {
  return products.filter((p) => p.occasions.includes(slug));
}

export function searchProducts(query) {
  const q = (query || '').trim();
  if (!q) return [];

  const fuse = new Fuse(products, {
    threshold: 0.35,
    keys: ['title', 'blurb', 'tags', 'merchant', 'price']
  });

  return fuse.search(q).map((r) => r.item);
}

export function getFeaturedProducts(limit = 8) {
  // Just take the first N for now; you can add a `featured: true` flag later.
  return products.slice(0, limit);
}
