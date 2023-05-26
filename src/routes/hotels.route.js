import express from "express";
import { getHotelbyID, getHotels } from "../controllers/hotels.controller.js";

const hotelsRoute = express.Router();

hotelsRoute.get("/hotels", getHotels);
hotelsRoute.get("/hotels/:id", getHotelbyID);
hotelsRoute.post("/hotels/admin/add");

export default hotelsRoute;
