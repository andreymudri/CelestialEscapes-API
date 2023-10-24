import express from 'express';
import {
	getHotelbyID,
	getHotels,
	adminaddHotel,
	adminAddCity,
} from '../controllers/hotels.controller.js';

const hotelsRoute = express.Router();

hotelsRoute.get('/hotels', getHotels);
hotelsRoute.get('/hotels/:id', getHotelbyID);
hotelsRoute.post('/hotels/admin/add', adminaddHotel);
hotelsRoute.post('/city/admin/add', adminAddCity);

export default hotelsRoute;
