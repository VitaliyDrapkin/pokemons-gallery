const express = require('express')
const mongoose = require("mongoose");
const pokemonsApi = require('./services/pokemons-api')
const pokemonsData = require('./services/pokemons-data')
const galleryController = require("./controllers/gallery-controller");
const pokemonsController = require("./controllers/pokemons-controller");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
const environment = require('./environment')

app.use(cors({origin: `${environment.clientUrl}`, credentials: true}));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/gallery", galleryController)
app.use("/pokemons", pokemonsController)


async function start() {
    try {
        await mongoose.connect(environment.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Successfully connect to MongoDB`);
        // pokemonsApi.getPokemonsData()

        //init data from database to array
        await pokemonsData.initData()
        app.listen(environment.port, () => {
            console.log(`Server is running on Port ${environment.port}`);
        });
    } catch (error) {
        console.log("Data base error" + error);
    }
}

start();

