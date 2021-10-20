const express = require("express");
const pokemonsApi = require('../services/pokemons-api')
const router = express.Router();
const editService = require('../services/edit-service')


router.get("/", async (request, response, next) => {
    try {
        response.send(pokemonsApi.galleryPokemons);
    } catch (error) {
        return next(error);
    }
});

router.post("/", async (request, response, next) => {
    try {
        editService.addPokemonToGallery(request.body.pokemonName)
        response.send({status: 1})
    } catch (error) {
        return next(error);
    }
});
router.delete("/:name", async (request, response, next) => {
    try {
        editService.removePokemonFromGallery(request.params.name)
        response.send({status: 1})
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
