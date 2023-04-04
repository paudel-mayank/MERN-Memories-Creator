import express from "express";
import {
  getPost,
  createPost,
  deletePost,
  editPost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPost).post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/:id", editPost);
export default router;
