const express = require("express")
const appetizer = require("./models/appetizer")
const maincourse = require("./models/maincourse")
const dessert = require("./models/dessert")
const why = require("./models/why")
const router = express.Router()
var path = require('path');
var jwt = require('jsonwebtoken');



var cors = require('cors')
router.use(cors())
    //===========================================

// function untuk mengecek token
function isAuthenticated(req, res, next) {
    var token = req.header('auth-token'); //req.body.token || req.query.token || req.headers.authorization; // mengambil token di antara request
    if (token) { //jika ada token
        jwt.verify(token, 'jwtsecret', function(err, decoded) { //jwt melakukan verify
            if (err) { // apa bila ada error
                res.json({ message: 'Failed to authenticate token' }); // jwt melakukan respon
            } else { // apa bila tidak error
                req.decoded = decoded; // menyimpan decoded ke req.decoded
                next(); //melajutkan proses
            }
        });
    } else { // apa bila tidak ada token
        return res.status(403).send({ message: 'No token provided.' }); // melkukan respon kalau token tidak ada
    }
}



router.get("/", async(req, res) => {

    res.sendFile(path.join(__dirname + '/view/index.html'));

})

router.get("/admin", async(req, res) => {

    res.sendFile(path.join(__dirname + '/view/admin_dashboard.html'));

})




// Get all posts appetizer
router.get("/GETappetizer", async(req, res) => {
        const GETappetizer = await appetizer.find()
        res.send(GETappetizer)
    })
    // posting data appetizer
router.post("/GETappetizer", async(req, res) => {
        const GETappetizer = new appetizer({
            gambar: req.body.gambar,
            nama: req.body.nama,
            harga: req.body.harga,
            deskripsi: req.body.deskripsi,
        })
        await GETappetizer.save()
        res.send(GETappetizer)
    })
    // update data appetizer
router.patch("/GETappetizer/:id", async(req, res) => {
        try {
            const GETappetizer = await appetizer.findOne({ _id: req.params.id })
            if (req.body.gambar) {
                GETappetizer.gambar = req.body.gambar
            }
            if (req.body.nama) {
                GETappetizer.nama = req.body.nama
            }
            if (req.body.harga) {
                GETappetizer.gambar = req.body.harga
            }
            if (req.body.deskripsi) {
                GETappetizer.deskirpsi = req.body.deskripsi
            }
            await GETappetizer.save()
            res.send(GETappetizer)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // delete appetizer
router.delete("/GETappetizer/:id", async(req, res) => {
        try {
            await appetizer.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // ambil satu data appetizer
router.get("/GETappetizer/:id", async(req, res) => {
        try {
            const GETappetizer = await appetizer.findOne({ _id: req.params.id })
            res.send(GETappetizer)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // akhir appetizer

// Get all posts maincourse
router.get("/GETmaincourse", async(req, res) => {
        const GETmaincourse = await maincourse.find()
        res.send(GETmaincourse)
    })
    // posting data maincourse
router.post("/GETmaincourse", async(req, res) => {
        const GETmaincourse = new maincourse({
            gambar: req.body.gambar,
            nama: req.body.nama,
            harga: req.body.harga,
            deskripsi: req.body.deskripsi,
        })
        await GETmaincourse.save()
        res.send(GETmaincourse)
    })
    // update data maincourse
router.patch("/GETmaincourse/:id", async(req, res) => {
        try {
            const GETmaincourse = await maincourse.findOne({ _id: req.params.id })
            if (req.body.gambar) {
                GETmaincourse.gambar = req.body.gambar
            }
            if (req.body.nama) {
                GETmaincourse.nama = req.body.nama
            }
            if (req.body.harga) {
                GETmaincourse.gambar = req.body.harga
            }
            if (req.body.deskripsi) {
                GETmaincourse.deskirpsi = req.body.deskripsi
            }
            await GETmaincourse.save()
            res.send(GETmaincourse)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // delete maincourse
router.delete("/GETmaincourse/:id", async(req, res) => {
        try {
            await maincourse.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // ambil satu data maincourse
router.get("/GETmaincourse/:id", async(req, res) => {
        try {
            const GETmaincourse = await maincourse.findOne({ _id: req.params.id })
            res.send(GETmaincourse)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // akhir maincourse

// awal dessert

// Get all posts dessert
router.get("/GETdessert", async(req, res) => {
        const GETdessert = await dessert.find()
        res.send(GETdessert)
    })
    // posting data dessert
router.post("/GETdessert", async(req, res) => {
        const GETdessert = new dessert({
            gambar: req.body.gambar,
            nama: req.body.nama,
            harga: req.body.harga,
            deskripsi: req.body.deskripsi,
        })
        await GETdessert.save()
        res.send(GETdessert)
    })
    // update data dessert
router.patch("/GETdessert/:id", async(req, res) => {
        try {
            const GETdessert = await dessert.findOne({ _id: req.params.id })
            if (req.body.gambar) {
                GETdessert.gambar = req.body.gambar
            }
            if (req.body.nama) {
                GETdessert.nama = req.body.nama
            }
            if (req.body.harga) {
                GETdessert.gambar = req.body.harga
            }
            if (req.body.deskripsi) {
                GETdessert.deskirpsi = req.body.deskripsi
            }
            await GETdessert.save()
            res.send(GETdessert)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // delete dessert
router.delete("/GETdessert/:id", async(req, res) => {
        try {
            await dessert.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // ambil satu data dessert
router.get("/GETdessert/:id", async(req, res) => {
        try {
            const GETdessert = await dessert.findOne({ _id: req.params.id })
            res.send(GETdessert)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // akhir dessert

// awal why

// Get all posts why
router.get("/GETwhy", async(req, res) => {
        const GETwhy = await why.find()
        res.send(GETwhy)
    })
    // posting data why
router.post("/GETwhy", async(req, res) => {
        const GETwhy = new why({
            no: req.body.no,
            judul: req.body.judul,
            deskripsi: req.body.deskripsi,
        })
        await GETwhy.save()
        res.send(GETwhy)
    })
    // update data why
router.patch("/GETwhy/:id", async(req, res) => {
        try {
            const GETwhy = await why.findOne({ _id: req.params.id })
            if (req.body.no) {
                GETwhy.gambar = req.body.no
            }
            if (req.body.nama) {
                GETwhy.nama = req.body.judul
            }
            if (req.body.harga) {
                GETwhy.gambar = req.body.deskripsi
            }
            await GETwhy.save()
            res.send(GETwhy)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // delete why
router.delete("/GETwhy/:id", async(req, res) => {
        try {
            await why.deleteOne({ _id: req.params.id })
            res.status(204).send()
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // ambil satu data why
router.get("/GETwhy/:id", async(req, res) => {
        try {
            const GETwhy = await why.findOne({ _id: req.params.id })
            res.send(GETwhy)
        } catch {
            res.status(404)
            res.send({ error: "Post doesn't exist!" })
        }
    })
    // akhir why



module.exports = router