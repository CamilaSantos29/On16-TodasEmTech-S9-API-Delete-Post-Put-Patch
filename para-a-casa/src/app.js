const express = require("express")
const app = express()
const pokemonRoutes = require("./routes/pokemonRoutes")

app.use(express.json())

app.use("/pokemon", pokemonRoutes)

module.exports = app