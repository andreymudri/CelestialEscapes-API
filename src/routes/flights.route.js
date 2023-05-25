import express from "express";
import { getFlights, getflightID } from "../controllers/flights.controller.js";


const flightsRoute = express.Router();

flightsRoute.get("/flights",getFlights);
flightsRoute.get("/flights/:id",getflightID);


export default flightsRoute;
