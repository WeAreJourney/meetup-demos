const expressVue = require("express-vue");
const express = require("express");

const app = express();

const evOptions = {
    rootPath: __dirname,
};

app.use(expressVue.init(evOptions));

app.get("/", function(req, res) {
    let data = {};
    res.renderVue("index.vue", data);
});

app.listen(3000, function() {
    console.info("App listening on port 3000!");
});
