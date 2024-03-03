const Track = require("../model/track.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

// FUNCIONES CRUD
/* 
SOLO SE PUEDEN HACER 4 COSAS EN UNA BASE DE DATOS:
1. CREAR
2. LEER
3. BORRAR
4. MODIFICAR 
*/

// un controlador debe tener todas las funciones que necesitamos para modificar la base de datos

// CREAR ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const createTrack = async (req, res, next) => {
  try {
    // 1. CREAR UNA VARIABLE (TIRPO TRACK) QUE RECOJA LOS DATOS QUE ENVIA EL USUARIO
    const track = new Track(req.body); // .body porque los datos se recogen en json y llegan a través de body????????????????????????????????
    // 2. GUARDAR EN BASE DE DATOS
    await track.save(); // guardamos la track creada
    // 3. RESPONDE AL USUARIO
    res.status(201).json({
      // all created
      status: 201,
      message: HTTPSTATUSCODE[201],
      track: track,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const updateTrack = async (req, res, next) => {
  try {
    // 1. BUSCAR EL TRACK QUE HAY QUE MODIFICAR POR LA ID QUE PROPORCIONA EL USER
    const id = req.params.id;
    // 2. RECOPILAR LOS DATOS QUE HAY QUE MODIFICAR QUE NOS HA PASADO EL USER POR EL BODY
    const body = req.body;
    // 3. ACTUALIZAR LA FUNCIÓN
    const track = await Track.findByIdAndUpdate(id, body, { new: true }); // FUNCIÓN DE MONGO QUE LOCALIZA POR ID, COGE EL BODY Y MODIFICA EL OBJETO ANTIGUO POR EL NUEVO QUE CONTIENE EL BODY
    // 4. RESPUESTA AL USUARIO
    if (!track) {
      // IF TRACK DOES NOT EXIST, 404 NOT FOUND
      return response.status(404).json({
        // SI ENCUENTRA LA TRACK, RETURN CONTIENE LA FUNCIÓN ASÍ QUE SALTA AL SIGUIENTE, SE AHORRA EL ELSE
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
    res.status(200).json({
      // IF TRACK EXISTS, ALL OKAY
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: track,
    });
  } catch (error) {
    next(error);
  }
};

// LEER UNA CANCIÓN ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const getTrack = async (req, res, next) => {
  try {
    // 1. OBTENGO LA ID QUE HA SOLICITADO EL USUARIO, nos lo pasa por req
    const id = req.params.id;
    // 2. BUSCO EN LA BASE DE DATOS POR ID
    const track = await Track.findById(id);
    // 3. RESPONDO AL USUARIO
    res.status(200).json({
      // all okay
      status: 200,
      message: HTTPSTATUSCODE[200],
      track: track,
    });
  } catch (error) {
    next(error);
  }
};

// LEER TODAS LAS CANCIONES ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const getTracks = async (req, res, next) => {
  try {
    // 2. BUSCO TODAS LAS TRACKS EN LA BASE DE DATOS POR ID
    const tracks = await Track.findById(id); //función de mongo que localiza por ID
    // 3. RESPONDO AL USUARIO
    res.status(200).json({
      // all okay
      status: 200,
      message: HTTPSTATUSCODE[200],
      tracks: tracks,
    });
  } catch (error) {
    next(error);
  }
};

// BORRAR  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const deleteTrack = async (req, res, next) => {
  try {
    const id = req.params.id; // USUARIO PROPORCIONA ID
    const track = await Track.findByIdAndDelete(id); // ENCUENTRA POR ID

    if (!track) {
      return res.status(404).json({ message: HTTPSTATUSCODE[404] }); // TRACK NOT FOUND, 404 NOT FOUND
    }

    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: movie,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTrack, getTracks, createTrack, updateTrack, deleteTrack };
