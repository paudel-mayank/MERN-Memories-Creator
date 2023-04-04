import PostMessage from "../models/postMessage.js";
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
  console.log(post);
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

  await PostMessage.findByIdAndRemove(id);
  console.log(id);
  res.json({
    message: "Posr deleted successfully",
  });
};
