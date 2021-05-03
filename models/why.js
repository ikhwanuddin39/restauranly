const mongoose = require("mongoose")
const schema = mongoose.Schema({
    no: String,
    judul: String,
    deskripsi: String,
})
module.exports = mongoose.model("why", schema)