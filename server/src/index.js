import express from "express";
import connectioin from "./config/database.js";

const app = express();
const port = 3000;

app.use(express.json());

connectioin.connect((err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log("Database is connected");
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})