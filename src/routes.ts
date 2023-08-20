import { Router } from "express";
import {
  getAlbum,
  getTrack,
  getTrackList,
} from "./controller/deezer.controller";

export const routes = (router: Router) => {
  // Deezer
  router.get("/api/deezer/track/:id", getTrack);
  router.post("/api/deezer/track/list", getTrackList);
  router.get("/api/deezer/album/:id", getAlbum);
};
