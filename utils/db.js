const mongoose = require("mongoose");

const pass =
  "mongodb+srv://Helena:holaBonaTarda@cluster0.qsfbwxs.mongodb.net/NodeDefinitive?retryWrites=true&w=majority&appName=Cluster0"; // esto lo sacamos de la página web de mongodb, básicamente es el usuario y contraseña para que podamos acceder a ese base de datos

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(pass); // aquí tenemos que poner como parámetro en connect la variable que contiene el pase de mongo db.
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};

module.exports = { connectMongo };
