import db from "../config/database.js";

export async function getAllFlights() {
  return await db.query(`SELECT * FROM flights;`);
}
export async function getFlightByID(id) {
  return await db.query(`SELECT * FROM flights WHERE id = $1;`, [id]);
}

export async function addFlight(body) {
  return await db.query(
    `INSERT INTO flights (
            name,
            description,
            price,
            start_date,
            end_date,
            company_id,
            destination_id,
            departure_id
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING id`,
    [
      body.name,
      body.description,
      body.price,
      body.start_date,
      body.end_date,
      body.company_id,
      body.destination_id,
      body.departure_id,
    ]
  );
}
