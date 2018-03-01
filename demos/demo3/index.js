const expressVue = require("express-vue");
const express = require("express");
const axios = require("axios");
const app = express();

const evOptions = {
    rootPath: __dirname,
    head: {
        scripts: [
            {src: "https://unpkg.com/axios/dist/axios.min.js"},
        ],
    },
};
app.use(expressVue.init(evOptions));

app.get("/", function(req, res) {
    let data = {};
    axios.get("https://dog.ceo/api/breeds/list")
        .then(response => {
            data.breeds = response.data.message;
            res.renderVue("index.vue", data);
        });
});

app.get("/dogs/:breed", function(req, res) {
    let data = {};
    axios.get(`https://dog.ceo/api/breed/${req.params.breed}/images/random`)
        .then(response => {
            data.image = response.data.message;
            res.json(data);
        });
});

app.listen(3000, function() {
    console.info("App listening on port 3000!");
});
