const mongoose = require("mongoose")

const Portfolio = new mongoose.Schema({
    Category : String,
    Photo : String,
    ReactCode : String
})

module.exports = mongoose.model('Portfolio',Portfolio)
