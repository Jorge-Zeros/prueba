// Tutorial.ts
import mongoose, { Schema } from "mongoose";

const { ObjectId } = Schema.Types;

const comentarioSchema = new mongoose.Schema({
  userId: ObjectId,
  comentario: String,
  hora: {
    type: Date,
    default: Date.now,
  },
});

const sesionesSchema = new mongoose.Schema({
  fecha: Date,
  duracion: Number,
  tema: String,
  comentarios: [comentarioSchema],
});

const tutorialSchema = new mongoose.Schema({
  estudianteId: ObjectId,
  profesorId: ObjectId,
  tema: String,
  fecha: Date, // Esto almacena la fecha de la tutoría
  // satisfacción o cálificación
  calificacion: {
    type: Number,
    min: 0,
    max: 5,
  },
  comentarios: [comentarioSchema], // Esto almacena los comentarios de la tutoría,
  sesiones: [sesionesSchema],
  estado: {
    type: String,
    enum: ["Activo", "Desactivado", "Finalizado"],
    default: "Desactivado",
  },
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

export default Tutorial;
