import express from "express";
import { getPost, createPost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPost).post("/", createPost);
router.delete("/:id", deletePost);
export default router;
