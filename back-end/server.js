const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");

const db = require("./models");
const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/clay.routes")(app);

db.sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
