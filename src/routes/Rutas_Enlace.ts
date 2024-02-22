import Enlace from "../models/Enlace";
import express from "express";

const router = express.Router();

// Get a list of all Tutores
router.get("/", async (req, res) => {
  try {
    const users = await Enlace.find();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new Enlace
router.post("/", async (req, res) => {
  try {
    const enlace = new Enlace({
      nombre: req.body.nombre,
      url: req.body.url,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
    });
    const newEnlace = await enlace.save();
    res.status(201).json(newEnlace);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a Tutor
router.delete("/:id", async (req, res) => {
  try {
    const user = await Enlace.findByIdAndDelete(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
