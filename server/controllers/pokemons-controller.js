const express = require("express");
const pokemonsApi = require('../services/pokemons-api')
const router = express.Router();
const editService = require('../services/edit-service')

router.get("/", async (request, response, next) => {
    try {
        response.send(editService.getPokemonsByNameAndType(request.query.search));
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
