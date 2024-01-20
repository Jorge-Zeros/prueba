import { Usuario, Estudiante, Tutor, Director } from "../models/Usuario";
import express from "express";

const router = express.Router();

// Get a list of all Director
router.get("/", async (req, res) => {
  try {
    const users = await Director.find();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single Director
router.get("/:id", async (req, res) => {
  try {
    const user = await Director.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.status(200).json(user);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// Update a Director
router.patch("/:id", async (req, res) => {
  try {
    const user = await Director.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.status(200).json(user);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

// Delete a Director
router.delete("/:id", async (req, res) => {
  try {
    const user = await Director.findByIdAndDelete(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
