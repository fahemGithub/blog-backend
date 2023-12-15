import mongoose from "mongoose";
import express from "express";
import userRoutes from "./routes/User.js"

const app = express();

app.use(express.json())

app.use('/api/users', userRoutes)

// Liason avec db
mongoose.connect("mongodb+srv://fahemeducaton:Qwerty1234567890@cluster0.h9fq7h1.mongodb.net/")
    .then(() => { app.listen(5000) })
    .then(() => { console.log(`connexion a mongodb a reusse sur le port 5000`) })
    .catch((e) => { console.log(e) })