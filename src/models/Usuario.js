"use strict";
exports.__esModule = true;
exports.Tutor = exports.Director = exports.Estudiante = exports.Usuario = void 0;
// User.ts
var mongoose_1 = require("mongoose");
var express = require("express");
var path = require("path");
var app = express();
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var options = { discriminatorKey: "kind" };
var userSchema = new mongoose_1["default"].Schema({
    nombre: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@unsaac\.edu\.pe$/,
        required: true,
        unique: true
    },
    password: {
        type: String,
        "default": "passwordTemporal",
        required: true,
        maxLength: 20,
        minLength: 8
    },
    foto: {
        type: String,
        "default": "./uploads/Profile_Pictures/Profile_default_photo.jpg",
        required: true
    },
    estado: {
        type: String,
        "enum": ["Activo", "Desactivado", "Suspendido"],
        "default": "Desactivado"
    }
});
var Usuario = mongoose_1["default"].model("Usuario", userSchema);
exports.Usuario = Usuario;
// Crear un modelo de estudiante
var Estudiante = Usuario.discriminator("Estudiante", new mongoose_1["default"].Schema({
    codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true
    },
    escuela: {
        type: String,
        maxLength: 50,
        "default": "Ingeniería Informática y de Sistemas",
        required: true
    },
    tutorias: [
        {
            type: ObjectId,
            ref: "Tutoria"
        },
    ]
}, options));
exports.Estudiante = Estudiante;
// Crear un modelo de Tutor (profesor)
var Tutor = Usuario.discriminator("Tutor", new mongoose_1["default"].Schema({
    codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true
    },
    escuela: {
        type: String,
        maxLength: 50,
        required: true,
        "default": "Ingeniería Informática y de Sistemas"
    },
    tutorias: [
        {
            type: ObjectId,
            ref: "Tutoria"
        },
    ]
}, options));
exports.Tutor = Tutor;
// Crear un modelo de director (administrador)
var Director = Usuario.discriminator("Director", new mongoose_1["default"].Schema({
    codigo: {
        type: String,
        match: /^[0-9]{6}$/,
        required: true,
        unique: true
    },
    escuela: {
        type: String,
        maxLength: 50
    }
}, options));
exports.Director = Director;
