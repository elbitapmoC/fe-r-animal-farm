// simple put, express is a framework for node that helps us build rest API's
import express from "express";
import cors from "cors";

// initialize the express app.
const app = express();

app.use(cors());
app.use(express.json());

// make some animals
import Chance from "chance";
const chance = new Chance();

//Creates an array of 250 items.
const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

// Endpoint to search for animals
app.get("", (req, res) => {
  // Filter results by query
  const q = req.query.q?.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.send(results);
});

app.listen(8080, () => console.log("Houston we have lift off! 🚀"));
