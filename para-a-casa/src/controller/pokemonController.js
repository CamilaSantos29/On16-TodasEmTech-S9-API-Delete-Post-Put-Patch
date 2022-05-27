const pokemonJson = require('../models/pokedex.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([
        {
            "pokemon": pokemonJson
        }
    ])
}

const updateDados = (request, response) => {

    const idRequest = request.params.id
    let pokemonRequest = request.body

    let indexEncontrado = pokemonJson.findIndex(pokemon => pokemon.id == idRequest)

    pokemonJson.splice(indexEncontrado, 1, pokemonRequest)

    response.status(200).json([{
        "message": "filme atualizado",
        pokemonJson
    }])
}

const updateStats = (request, response) => {
    const idRequest = request.params.id
    let novoStats = request.body.stats

    statsFiltrado = pokemonJson.find(pokemon => pokemon.id == idRequest)

    statsFiltrado.stats= novoStats

    response.status(200).json([{
        "mensagem": "nome do pokemon atualizado",
        statsFiltrado
    
  }])
}

const deletePokemonPorTipo = (request, response) => {
    const typeRequest = request.query.typeRequest
    const tiposFiltrados = pokemonJson.filter(pokemon => pokemon.type.includes(typeRequest));
    for (indice = 0; indice > tiposFiltrados.length; indice++ ) {
        const index = pokemonJson.indixOf(tiposFiltrados[indice])
        pokemonJson.splice(index, 1)     
    }
    response.status(200).json([
        {
        "message": "tipos deletados",
        "deletado": typeRequest,
        pokemonJson
        }
    ])
}

const deletePokemonId = (request, response) => {
    
    const idRequest = request.params.id
    
    const indicePokemon = pokemonJson.findIndex(pokemon => pokemon.id == idRequest)
    
    pokemonJson.splice(indicePokemon, 1)
    
    response.status(200).json([{
        "message": "pokemon deletado, baby",
        "deletado": idRequest,
        pokemonJson
    }])

    }


module.exports = {
    getAll,
    updateStats,
    updateDados,
    deletePokemonPorTipo,
    deletePokemonId
}