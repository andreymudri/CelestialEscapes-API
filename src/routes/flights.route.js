import express from "express";
import { getFlights, getflightID } from "../controllers/flights.controller.js";
import { addFlight } from "../repository/flights.repository.js";

const flightsRoute = express.Router();

flightsRoute.get("/flights", getFlights);
flightsRoute.get("/flights/:id", getflightID);
flightsRoute.post("/flights/admin/add", addFlight);

export default flightsRoute;
