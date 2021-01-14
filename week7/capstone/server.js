const express = require("express");
const app = express();
const morgan = require('morgan')


app.use(express.json());
app.use(morgan('dev'))


app.use("/users", require('./routes/dataRouter.js'))
app.use("/properties", require('./routes/propRouter.js'))

app.listen(9000, () => {
    console.log("The server is running on Port 9000");
})
