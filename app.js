const userRouter = require("./routes/user");
const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));
app.use("/users", userRouter);

const models = require('./models');
models.sequelize.sync()
    .then(() => {
        app.listen(8000, function () {
            console.log("Сервер ожидает подключения...");
        });
    })
    .catch((err) => {
        console.log(err, 'Something went wrong with the Database Update!');
    });


