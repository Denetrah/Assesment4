
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());



const {getCompliment ,getFortune, createOutput , getQuotes , getEncor, createGoal,updateGoals,deleteGoals} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune" , getFortune)
app.post("/api/createOutput", createOutput)
app.get("/api/quotes", getQuotes)

app.get("/api/encourage", getEncor)

app.post("/api/createGoal", createGoal)

app.delete("/api/newGoals", deleteGoals)

app.put("/api/createGoal/:id", updateGoals)
// app.get("/api/suggestion")
app.listen(4000, () => console.log("Server running on 4000"));

