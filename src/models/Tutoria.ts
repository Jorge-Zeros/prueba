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

const tutorialSchema = new mongoose.Schema({
  estudianteId: ObjectId,
  profesorId: ObjectId,
  tema: String,
  fecha: Date, // Esto almacena la fecha de la tutoría
  comentarios: [comentarioSchema], // Esto almacena los comentarios de la tutoría
});

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

export default Tutorial;
