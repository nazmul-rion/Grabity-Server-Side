const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 7000;
const categoryRouter = require("./routes/categoryRouter")
const productRouter = require("./routes/productRouter")
const departmentRouter = require("./routes/departmentRouter")
const ReviewRouter = require("./routes/ReviewRouter")


// Middleware  
app.use(cors());
app.use(express.json());
const uri = process.env.MongoDBURI;



async function run() {
    try {

        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log("database connection succesfully");
            })
            .catch((error) => {
                console.log(error);
            })
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {

    res.send("server is running");

});

// Main Category Route
app.use('/categories', categoryRouter);

// Product Details Route
app.use('/products', productRouter);

// Department Details Route
app.use('/departments', departmentRouter);

// Review Details Route
app.use('/reviews', ReviewRouter);



app.listen(port, () => {
    console.log(`My Server listening at http://192.168.0.100:${port}`)
})