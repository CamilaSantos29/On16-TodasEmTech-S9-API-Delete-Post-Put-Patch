const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request,response) => {
    response.status(200).json([
    {
        "filmes": filmesJson
    }
  ])
}

const updateTitle = (request, response) => {
    const idRequest = request.params.id
    let novoTitulo = request.body.title

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.title = novoTitulo

    response.status(200).json([{
        "mensagem": "seu filme foi filtrado e atualizado",
        filmeFiltrado
  }])

}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    // oq isso esta fazendo???
    // esta removendo UM elemento, a partir de iNDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}

const deleteFilme = (request, response) => {
    
    // id que quero deletar
    const idRequest = request.params.id
    
    // pegar o indice(index) do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)
    
    // retira o filme da array de filmes a partir do indice que eu disser 
    // ARRAY.SPLICE(INDICE, NUMERO DE COISAS QUE VOU DELETAR, ITEM QUE VOU ADICIONAR)
    filmesJson.splice(indiceFilme, 1)
    
    response.status(200).json([{
        "message": "filme deletado, mona",
        "deletado": idRequest,
        filmesJson
    }])

    }



module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme
}

