import { sql } from "./db";

export async function getAllProductsFromDb() {
  const rows = await sql`
    select
      id,
      title,
      blurb,
      merchant,
      affiliate_url as "affiliateUrl",
      image,
      price,
      price_value as "priceValue",
      popularity,
      recipients,
      occasions
    from products
    order by updated_at desc
  `;
  return rows;
}

export async function upsertProducts(products) {
  for (const p of products) {
    await sql`
      insert into products (
        id, title, blurb, merchant, affiliate_url, image,
        price, price_value, popularity, recipients, occasions, updated_at
      ) values (
        ${p.id},
        ${p.title},
        ${p.blurb ?? ""},
        ${p.merchant ?? "Amazon"},
        ${p.affiliateUrl},
        ${p.image ?? ""},
        ${p.price ?? ""},
        ${p.priceValue ?? null},
        ${p.popularity ?? 0},
        ${p.recipients ?? []},
        ${p.occasions ?? []},
        now()
      )
      on conflict (id) do update set
        title = excluded.title,
        blurb = excluded.blurb,
        merchant = excluded.merchant,
        affiliate_url = excluded.affiliate_url,
        image = excluded.image,
        price = excluded.price,
        price_value = excluded.price_value,
        popularity = excluded.popularity,
        recipients = excluded.recipients,
        occasions = excluded.occasions,
        updated_at = now()
    `;
  }
}
