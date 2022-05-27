const controller = require('../controller/pokemonController')
const express = require('express')
const router = express.Router()

router.get("/catalogo", controller.getAll)
router.put("/change/:id", controller.updateDados)
router.patch("/update/:id", controller.updateStats)
router.delete("/delete/type", controller.deletePokemonPorTipo)
router.delete("/delete/:id", controller.deletePokemonId)

module.exports = router

