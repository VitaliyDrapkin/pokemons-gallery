const express = require("express");
const router = express.Router();
const galleryService = require('../services/gallery.service')


router.get("/", async (request, response, next) => {
    try {
        response.send(galleryService.getGallery());
    } catch (error) {
        return next(error);
    }
});

router.post("/", async (request, response, next) => {
    try {
        await galleryService.addPokemonToGallery(request.body.pokemonName)
        response.send({status: 1})
    } catch (error) {
        return next(error);
    }
});
router.delete("/:name", async (request, response, next) => {
    try {
        await galleryService.removePokemonFromGallery(request.params.name)
        response.send({status: 1})
    } catch (error) {
        return next(error);
    }
});

module.exports = router;
