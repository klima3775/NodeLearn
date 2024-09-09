import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// logs info about request
app.use(morgan("tiny"));
// converts JSON to JS Object in POST, PUT, PATCH requests
app.use(express.json());
// convets form data to JS Object in POST, PUT, PATCH requests
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res) => {
  console.log(req.body);
  const personData = {
    name: "Klima",
    isInstructor: false,
  };
  return res.json(personData);
});

app.listen(5000, () => console.log("server is listening at port 5000"));
