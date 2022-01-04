const express = require('express');
const app = express();

//const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());


const v1Routes = require('./routes/v1');


app.use('/api/v1',v1Routes);

// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
//    console.log("sucess")
// });

app.listen("3000", () => {
    console.log("listening on http://localhost:3000");
});

