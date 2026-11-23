import express from "express";
import menuItem from "./data/menuItem.js";
import operatingHours from "./data/operatingHours.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Welcome to What's Fare is Fair!");
});

app.get("/menu", (req, res) => {
    res.send(menuItem);
});

app.get("/hours", (req, res) => {
    res.send(operatingHours);
})

// app.get("/about", (req, res) =>{
//     res.status(200).sendFile("/about.html");
// })

app.listen(PORT || 3000, ()=> {
    console.log(`Server running on port ${PORT}`)
})