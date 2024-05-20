const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { type } = require('os')

app.use(cors());
app.use(express.json());
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { Schema } = mongoose

const furnitureSchema = new Schema({
    img: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    }
})

const Furniture = mongoose.model("Furniture", furnitureSchema);

app.post("/furnitures", async (req, res) => {
    try {
        const { img, title, price } = req.body
        const newFurniture = new Furniture({
            img,
            title,
            price
        })
        await newFurniture.save()
        res.status(201).send(newFurniture)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }

})

app.get("/furnitures", async (req, res) => {
    try {
        const furnitures = await Furniture.find({})
        res.status(200).send(furnitures)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})


app.delete("/furnitures/:id", async (req, res) => {
    try {
        const { id } = req.params
        const furnitureDelete = await Furniture.findByIdAndDelete(id)
        res.status(200).send(furnitureDelete)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

app.get("/furnitures/:id", async (req, res) => {
    try {
        const { id } = req.params
        const furnitureFind = await Furniture.findById(id)
        res.status(200).send(furnitureFind)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})

app.put("/furnitures/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { img, title, price } = req.body
        const furnitureUpdate = await Furniture.findByIdAndUpdate(id, {
            img, 
            title, 
            price
        })
        res.status(200).send(furnitureUpdate)
    } catch (err) {
        res.status(500).json({
            message: err
        })
    }
})








const PORT = process.env.PORT;
const DB = process.env.DB_URL;

app.listen(PORT, console.log("Port is Active", PORT))
mongoose.connect(DB)
    .then(() => console.log('Connected!'));
