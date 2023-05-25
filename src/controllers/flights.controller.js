import {
  addFlight,
  getAllFlights,
  getFlightByID,
} from "../repository/flights.repository.js";

export async function getFlights(req, res) {
  try {
    const flights = await getAllFlights();
    res.send(flights);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function getflightID(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.sendStatus(400);
  try {
    const flight = await getFlightByID(id);
    res.send(flight);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function adminCreateFlight(req, res) {
  const flight = req.body;
  try {
    const id = await addFlight(flight);
    res.send(201).status({ message: "Flight Created Successfully", id });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
