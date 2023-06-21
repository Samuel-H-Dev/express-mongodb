import  express  from "express";
import cors from "cors";
import db from "./mongoConnect.js"
import { addFurniture, getAllFurniture } from "./furniture.js";


//this enables us to use .env file
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 4040

app.post("/", addFurniture)

app.get("/", (req, res) => {
    // res.status(200).send(data)
    res.status(200).send("connected")

})
app.get("/all", getAllFurniture)


app.listen(PORT, () => console.log(`My api is running 😁`))