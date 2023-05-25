import express from "express";
import flightsRoute from "./flights.route.js";
import hotelsRoute from "./hotels.route.js";
import authRoute from "./auth.route.js";

const router = express.Router();

router.use(authRoute);
router.use(flightsRoute);
router.use(hotelsRoute);
export default router;
