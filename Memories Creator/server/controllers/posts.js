import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import e from "express";
export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await PostMessage.findByIdAndRemove(id);
  } catch (err) {
    res.json(err.message);
    console.log(err);
  }
  res.json({
    message: "Posr deleted successfully",
  });
};
export const editPost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  // if (mongoose.Types.ObjectId(isValid(id)))
  // return res.status(404).send("no post wih ytaht id");
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { ...post, id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};
