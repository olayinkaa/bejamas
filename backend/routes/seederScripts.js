require('dotenv').config()

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = () => {
    try {
        await Product.deleteMany()
        await Product.insertMany(productsData)
        console.log("Data import success")
        process.exit(1)
    } catch (error) {
        console.error("Error with data import")
    }
}

importData()