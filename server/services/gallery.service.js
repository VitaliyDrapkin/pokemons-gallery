const pokemonsData = require('./pokemons-data')

function getGallery() {
    return pokemonsData.getGallery()
}

async function addPokemonToGallery(name) {
    const pokemon = pokemonsData.getAllPokemons().find(pokemon => pokemon.name === name)
    await pokemonsData.addPokemonToGallery(pokemon)
}

async function removePokemonFromGallery(name) {
    const pokemon = pokemonsData.getAllPokemons().find(pokemon => pokemon.name === name)
    await pokemonsData.removePokemonFromGallery(pokemon)
}

module.exports = {
    addPokemonToGallery,
    removePokemonFromGallery,
    getGallery,
}
