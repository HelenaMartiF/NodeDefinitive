// classe de js que maneja todas las rutas, colección de rutas. tiene la logica de cada petición. si usuario pide una canción, se hacen una serie de comandos que se guardan en cada función del controlador.

const express = require("express");
// EL ROUTER ES EL OBJETO QUE GUARDA TODAS LAS RUTAS
const trackRouter = express.Router();
// INSTANCIAMOS AL CONTROLADOR PARA USAR LAS FUNCIONES RELATIVAS A CADA RUTA
const {
  getTrack,
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} = require("../controller/track.controller");

// LAS RUTAS
// nombreDelRouter.get('endpoint', <nombreDeLaFuncion>);

//OBTENER UNA CANCIÓN
trackRouter.get("/:id", getTrack);

//OBTENER TODAS LAS CANCIONES
trackRouter.get("/", getTracks);

//CREAR UNA CANCIÓN
trackRouter.post("/", createTrack);

//UPDATE
trackRouter.patch("/:id", updateTrack);

//DELETE
trackRouter.delete("/:id", deleteTrack);

module.exports = trackRouter;
