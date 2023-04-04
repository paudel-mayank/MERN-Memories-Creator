import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/post.js";
const port = process.env.port || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connectionURL =
  "mongodb+srv://mayankpaudel:memoriescreator@memories.lig1dsc.mongodb.net/?retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("hello");
});
mongoose
  .connect(connectionURL, {
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
