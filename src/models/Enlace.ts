// Tutorial.ts
import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const enlaceEsquema = new mongoose.Schema({
  nombre: String,
  url: String,
  descripcion: String,
  fecha: Date, // Esto almacena la fecha de la tutoría
  // satisfacción o cálificación
});

const Enlace = mongoose.model("Tutorial", enlaceEsquema);

export default Enlace;
