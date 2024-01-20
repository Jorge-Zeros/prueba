import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
// index.ts o app.ts
import "./src/db/connection";
// cargar rutas
import userRoutes from "./src/routes/Rutas_Usuario";
import estudianteRoutes from "./src/routes/Rutas_Estudiante";
import tutorRoutes from "./src/routes/Rutas_Tutor";
import directorRoutes from "./src/routes/Rutas_Director";
// Cargar usuarios

const PORT = process.env.PORT || 3600;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const app = express();

const corsOptions: cors.CorsOptions = {
  origin: CORS_ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Load the routes
app.use("/usuarios", userRoutes);
app.use("/estudiantes", estudianteRoutes);
app.use("/tutores", tutorRoutes);
app.use("/directores", directorRoutes);

// Middleware para manejar errores 404 (Recurso no encontrado)
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Middleware para manejar errores
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
