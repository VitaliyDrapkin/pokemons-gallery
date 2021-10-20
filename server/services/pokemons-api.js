const https = require('https')

const pokemonsUrls = []
const pokemons = []
const galleryPokemons = []

async function getPokemons(i) {
    getDataFromApiRequest(`https://pokeapi.co/api/v2/pokemon?limit=898`).then(data => {
        data.results.forEach(result => {
            pokemonsUrls.push(result.url)
        })
        getPokemonsData()
    })
}

async function getPokemonsData() {
    for (let i = 0; i < 898; i++) {
        await getDataFromApiRequest(`https://pokeapi.co/api/v2/pokemon/${i + 1}/`).then(value => {
                const pokemon = {
                    name: value.name,
                    img: value.sprites.front_default,
                    types: value.types.map(item => item.type.name),
                    weight: value.weight / 10
                }
                pokemons.push(pokemon)
            }
        )
        if (pokemons.length === 10) {
            console.log('end')
            return
        }
    }
    // const promises = pokemonsUrls.map(item => getDataFromApiRequest(item))
    // Promise.all(promises).then((values) => {
    //     values.forEach(value => {
    //         const pokemon = {
    //             name: value.name,
    //             img: value.sprites.front_default,
    //             types: value.types.map(item => item.type.name),
    //             weight: value.weight / 10
    //         }
    //         pokemons.push(pokemon)
    //     })
    // })
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
    getPokemons,
    pokemons,
    galleryPokemons
}
