const pokemonsData = require('./pokemons-data')

function getPokemonsByNameAndType(value) {
    if (!value) {
        return pokemonsData.getAllPokemons()
    }
    return pokemonsData.getAllPokemons().filter(pokemon => {
        return ((pokemon.name.includes(value) || pokemon.types.includes(value)) && !pokemonsData.getGallery().find(item => item.name === pokemon.name))
    })
}


module.exports = {
    getPokemonsByNameAndType,
}
