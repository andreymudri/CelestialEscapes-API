import db from "../config/database.js";

export async function getAllHotels() {
  return await db.query(`
      SELECT hotels.id, hotels.name, hotels.description, cities.name AS city, hotels.img_url
      FROM hotels
      JOIN cities ON hotels.city = cities.id;
    `);
}

export async function getHotelID(id) {
  return await db.query(
    `
      SELECT hotels.*, cities.name AS city
      FROM hotels
      JOIN cities ON hotels.city = cities.id
      WHERE hotels.id = $1;
    `,
    [id]
  );
}

export async function addHotel(body) {
  return await db.query(
    `INSERT INTO hotels(
        name,
        description,
        city,
        img_url) VALUES ($1,$2,$3,$4) RETURNING id`,
    [body.name, body.description, body.city, body.img_url]
  );
}
