const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const notesRoute = require('./routes/notes')

app.use(notesRoute);


sequelize.sync()
.then(() => {
    app.listen(5000);
})
.catch(err => console.error(err));