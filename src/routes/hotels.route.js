import express from "express";

const hotelsRoute = express.Router();

hotelsRoute.get("/hotels");
hotelsRoute.get("/hotels/:id")

export default hotelsRoute;
