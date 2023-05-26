import db from "../config/database.js";

export async function getAllHotels() {
  return await db.query(`SELECT * FROM hotels;`);
}

export async function getHotelID(id) {
  return await db.query(`SELECT * FROM hotels WHERE id = $1;`, [id]);
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
