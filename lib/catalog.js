import { getAllProductsFromDb } from "./productStore";
import { products as fallbackProducts } from "../data/products";

function shuffleWithSeed(items, seed) {
  let result = [...items];
  let s = seed;

  for (let i = result.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function getDailySeed() {
  const now = new Date();
  const dayKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  let seed = 0;
  for (let i = 0; i < dayKey.length; i++) seed += dayKey.charCodeAt(i);
  return seed;
}

export async function getProducts({ recipient, occasion, max, sort = "fresh" } = {}) {
  let list = [];

  try {
    list = await getAllProductsFromDb();
  } catch (e) {
    // fallback locally if DB isn't connected
    list = [...fallbackProducts];
  }

  if (recipient) {
    list = list.filter((p) => (p.recipients || []).includes(recipient));
  }

  if (occasion) {
    list = list.filter((p) => (p.occasions || []).includes(occasion));
  }

  if (typeof max === "number") {
    list = list.filter((p) => !p.priceValue || p.priceValue <= max);
  }

  if (sort === "budget") {
    list.sort((a, b) => (a.priceValue || 999999) - (b.priceValue || 999999));
  } else if (sort === "popular") {
    list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else {
    list = shuffleWithSeed(list, getDailySeed());
  }

  return list;
}
