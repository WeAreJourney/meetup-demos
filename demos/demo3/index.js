const expressVue = require("express-vue");
var bodyParser = require("body-parser");
const express = require("express");
const axios = require("axios");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

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

app.post("/dogs", function(req, res) {
    let data = {};
    axios.get(`https://dog.ceo/api/breed/${req.body.breed}/images/random`)
        .then(response => {
            data.image = response.data.message;
            res.json(data);
        });
});

app.listen(3000, function() {
    console.info("App listening on port 3000!");
});
