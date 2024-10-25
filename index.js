const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
require("dotenv").config();

const database = require("./config/database");

const route = require("./routes/index.route");

database.connect();

const app = express();
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// App Local Variables
// app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Public
app.use(express.static(`${__dirname}/public`));

//Routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});