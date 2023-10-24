import db from '../config/database.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
      SELECT hotels.*, cities.name AS city, rooms.*
      FROM hotels
      JOIN cities ON hotels.city = cities.id
      JOIN rooms ON rooms.hotel_id = hotels.id
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

export async function addCity(body) {
	try {
		const newCity = await prisma.cities.create({
			data: {
				name: 'New City',
				country: 'New Country',
				img_url: 'https://example.com/new-city-image.jpg',
			},
		});

		console.log('New city created:', newCity);
	} catch (error) {
		console.error('Error creating city:', error);
	} finally {
		await prisma.$disconnect();
	}
}
