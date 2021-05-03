const mongoose = require("mongoose")
const schema = mongoose.Schema({
    gambar: String,
    nama: String,
    harga: String,
    deskripsi: String,
})
module.exports = mongoose.model("maincourse", schema)