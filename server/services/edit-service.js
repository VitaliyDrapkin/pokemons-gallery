const pokemonsApi = require('../services/pokemons-api')

function getPokemonsByNameAndType(value) {
    if (!value) {
        return pokemonsApi.pokemons
    }
    return pokemonsApi.pokemons.filter(pokemon => {
        return ((pokemon.name.includes(value) || pokemon.types.includes(value)) && !pokemonsApi.galleryPokemons.find(item => item.name === pokemon.name))
    })
}

function addPokemonToGallery(name) {
    const pokemon = pokemonsApi.pokemons.find(pokemon => pokemon.name === name)
    if (!pokemonsApi.galleryPokemons.find(pokemon => pokemon.name === name)) {
        pokemonsApi.galleryPokemons.push(pokemon)
    }
}

function removePokemonFromGallery(name) {
    pokemonsApi.galleryPokemons = pokemonsApi.galleryPokemons.filter(pokemon => pokemon.name !== name)
}

module.exports = {
    getPokemonsByNameAndType,
    addPokemonToGallery,
    removePokemonFromGallery
}
