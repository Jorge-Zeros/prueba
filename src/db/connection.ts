import mongoose from "mongoose";

const dbName = "tutorias_db";
const connectionString = process.env.ATLAS_URI || "";

mongoose
  .connect(connectionString, {})
  .then((req) => console.log("Database connected!"))
  .catch((err) => {
    console.log(err);
    console.log("No funciono la coneccion a la db");
  });
