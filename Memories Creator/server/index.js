import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRouter from "./routes/post.js";
const app = express();
dotenv.config();
app.use(cors());
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello");
});
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("connection succesfull"))
  .catch((err) => console.log(err.message));
// mongoose.set("useFindAndModify", false);
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`server Listening at ${port}`);
});
