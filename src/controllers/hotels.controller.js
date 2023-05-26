import { getAllHotels, getHotelID } from "../repository/hotels.repository.js";

export async function getHotels(req, res) {
  try {
    const result = await getAllHotels();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
export async function getHotelbyID(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.sendStatus(400);
  try {
    const result = await getHotelID(id);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
