const express = require('express')
const pokemonsApi = require('./services/pokemons-api')
const galleryController = require("./controllers/gallery-controller");
const pokemonsController = require("./controllers/pokemons-controller");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const environment = require('./environment')

pokemonsApi.getPokemons()

app.use(cors({origin: `${environment.clientUrl}`, credentials: true}));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/gallery", galleryController)
app.use("/pokemons", pokemonsController)

app.listen(environment.port, () => {
    console.log(`App listening on port ${environment.port}!`)
});
