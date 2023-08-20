import { Request, Response } from "express";
import axios from "axios";

export const getTrack = async (req: Request, res: Response) => {
  if (!req.params.id) return res.send({ message: "Bad request" });

  const options = {
    method: "GET",
    url: `${process.env.URL}/track/${req.params.id}`,
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);

    if (!response) return res.send({ message: "Something went wrong" });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getTrackList = async (req: Request, res: Response) => {
  const options = {
    method: "GET",
    url: req.body.url,
  };

  try {
    const response = await axios.request(options);

    if (!response) return res.send({ message: "Something went wrong" });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getAlbum = async (req: Request, res: Response) => {
  const options = {
    method: "GET",
    url: `${process.env.URL}/album/${req.params.id}`,
    headers: {
      "X-RapidAPI-Key": process.env.KEY,
      "X-RapidAPI-Host": process.env.HOST,
    },
  };

  try {
    const response = await axios.request(options);

    if (!response) return res.send({ message: "Something went wrong" });
    res.send(response.data);
  } catch (error) {
    console.error(error);
  }
};
