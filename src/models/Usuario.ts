// User.ts
import mongoose, { Schema } from "mongoose";

import express = require("express");
import * as path from "path";

const app = express();

app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

const { ObjectId } = Schema.Types;

const options = { discriminatorKey: "kind" };

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    match: /^[a-zA-Z0-9._%+-]+@unsaac\.edu\.pe$/,
    required: true,
    unique: true, // Esto asegura que el email sea único
  },
  password: {
    type: String,
    default: "passwordTemporal",
    required: true,
    maxLength: 20,
    minLength: 8,
  },
  foto: {
    type: String,
    default: "./uploads/Profile_Pictures/Profile_default_photo.jpg",
    required: true,
  },
  estado: {
    type: String,
    enum: ["Activo", "Desactivado", "Suspendido"],
    default: "Desactivado",
  },
});

const Usuario = mongoose.model("Usuario", userSchema);

// Crear un modelo de estudiante
const Estudiante = Usuario.discriminator(
  "Estudiante",
  new mongoose.Schema(
    {
      codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true,
      },
      escuela: {
        type: String,
        maxLength: 50,
        default: "Ingeniería Informática y de Sistemas",
        required: true,
      },
      tutorias: [
        {
          type: ObjectId,
          ref: "Tutoria",
        },
      ],
    },
    options
  )
);

// Crear un modelo de Tutor (profesor)
const Tutor = Usuario.discriminator(
  "Tutor",
  new mongoose.Schema(
    {
      codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true,
      },
      escuela: {
        type: String,
        maxLength: 50,
        required: true,
        default: "Ingeniería Informática y de Sistemas",
      },
      tutorias: [
        {
          type: ObjectId,
          ref: "Tutoria",
        },
      ],
    },
    options
  )
);

// Crear un modelo de director (administrador)
const Director = Usuario.discriminator(
  "Director",
  new mongoose.Schema(
    {
      codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true,
      },
      escuela: {
        type: String,
        maxLength: 50,
      },
    },
    options
  )
);

// Exportar el modelo de Usuario
export { Usuario, Estudiante, Director, Tutor };
