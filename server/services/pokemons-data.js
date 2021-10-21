const PokemonGallery = require('../models/pokemon-gallery')
const Pokemon = require('../models/pokemon')

let pokemons = []
let pokemonsGalleryArray = []

async function initData() {
    const pokemonsData = await Pokemon.find()
    pokemonsData.forEach(pokemon => {
        pokemons.push(pokemon)
    })
    const pokemonsGalleryData = await PokemonGallery.find()
    pokemonsGalleryData.forEach(pokemon => {
        pokemonsGalleryArray.push(pokemon)
    })
}

function getAllPokemons() {
    return pokemons
}

function getGallery() {
    return pokemonsGalleryArray
}

async function addPokemonToGallery(pokemon) {
    pokemonsGalleryArray.push(pokemon)
    const pokemonGalleryItem = new PokemonGallery({
        name: pokemon.name,
        img: pokemon.img,
        types: pokemon.types,
        weight: pokemon.weight
    })
    pokemonGalleryItem.save()
}

async function removePokemonFromGallery(pokemon) {
    const test = await PokemonGallery.findOneAndDelete({name: pokemon.name})
    console.log(test);
    pokemonsGalleryArray = pokemonsGalleryArray.filter(item => item.name !== pokemon.name)
}

module.exports = {
    initData,
    getAllPokemons,
    getGallery,
    addPokemonToGallery,
    removePokemonFromGallery
}
