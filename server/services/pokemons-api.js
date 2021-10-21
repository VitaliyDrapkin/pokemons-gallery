const https = require('https')
const Pokemon = require('../models/pokemon')

async function getPokemonsData() {
    for (let i = 0; i < 898; i++) {
        await getDataFromApiRequest(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`).then(value => {
                const pokemon = new Pokemon({
                    name: value.name,
                    img: value.sprites.front_default,
                    types: value.types.map(item => item.type.name),
                    weight: value.weight * 0.45
                })
                pokemon.save()
                console.log('pokemons saved', i + 1);
            }
        )
    }
}

async function getDataFromApiRequest(url) {
    return new Promise((resolve, reject) => {
        let data = ''
        https.get(url, response => {
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(data))
            });
        })
    })
}

module.exports = {
    getPokemonsData,
}
