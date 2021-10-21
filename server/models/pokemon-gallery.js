const mongoose = require("mongoose");

const pokemonGallery = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    types: [
        {
            type: String,
        }
    ]
});

module.exports = mongoose.model("pokemon_gallery", pokemonGallery);
