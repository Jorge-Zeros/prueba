import * as fs from "fs";
import csv = require("csv-parser");
import { Director } from "../src/models/Usuario";
import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://161534:UftqIrKUiv81MecS@cluster0.aevwbq5.mongodb.net/tutorias_db?retryWrites=true&w=majority" ||
  "";
console.log(connectionString);
mongoose
  .connect(connectionString, {})
  .then((req) => console.log("Database connected!"))
  .catch((err) => {
    console.log(err);
    console.log("No funciono la coneccion a la db");
  });

/* ID_Docente	Apellido Paterno	Apellido Materno	Nombres
    112314	ENCISO 	RODAS	LAURO
    123455	ACURIO	USCA	NILA ZONIA
    332487	MEDRANO	VALENCIA	IVÁN CÉSAR
    843247	CANDIA	OVIEDO	DENNIS IVAN
    651120	MEDINA	MIRANDA	KARELIA
    462588	IBARRA	ZAMBRANO	WALDO ELIO
    279012	VERA	OLIVERA	HARLEY
    389902	BACA	CARDENAS	LINO AQUILES
    590124	CHULLO	LLAVE	BORIS
    102966	FALCON	HUALLPA	ELIDA
*/

/* Puedes crear un array de arrays con los datos de los codigo de tutores 
   y nombres concatenando los apellido paterno, materno y nombres
 */

const tutores = [["462588", "IBARRA ZAMBRANO WALDO ELIO"]];

// Insertar los datos en la base de datos
(async () => {
  for (const tutor of tutores) {
    let partes = tutor[1].split(" ");
    const user = new Director({
      codigo: tutor[0],
      nombre: tutor[1],
      email: `${partes[2]}.${partes[0]}@unsaac.edu.pe`,
    });

    try {
      await user.save();
    } catch (error) {
      console.error(`Error al guardar el usuario: ${error}`);
    }
  }
})().catch((err) => console.error(err));
