
//import express

const express = require("express")


//app(server) creation

const app = express()




//import logic file

const logic = require('./service/logic')

// integrate frontend with server

const cors = require('cors')
app.use(cors({ origin: 'http://localhost:4200' }))

//to convert all incoming json data in to js

app.use(express.json())







app.post('/register', (req, res) => {

    logic.register(req.body.acno, req.body.uname, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)
    })
})






app.post('/login', (req, res) => {

    logic.login(req.body.acno, req.body.psw).then(result => {
        res.status(result.statusCode).json(result)
    })
})


app.post('/ticket', (req, res) => {

    logic.ticket(
        req.body.name,
        req.body.acno,
        req.body.age,
        req.body.adress,
        req.body.npass,
        req.body.cn,
        req.body.cdstn,
        req.body.psw,
        req.body.date).then(result => {
            res.status(result.statusCode).json(result)
        })
})



app.post('/hticket', (req, res) => {

    logic.hticket(
        req.body.name,
        req.body.acno,
        req.body.age,
        req.body.adress,
        req.body.nadm,
        req.body.nac,
        req.body.cn,
        req.body.cdstn,
        req.body.type,
        req.body.psw,
        req.body.date).then(result => {
            res.status(result.statusCode).json(result)
        })
})

app.post('/uticket', (req, res) => {

    logic.uticket(
        req.body.name,
        req.body.acno,
        req.body.age,
        req.body.adress,
        req.body.nadm,
        req.body.nac,
        req.body.cn,
        req.body.psw,
        req.body.date).then(result => {
            res.status(result.statusCode).json(result)
        })
})


app.get('/receipt/:acno', (req, res) => {
    logic.receipt(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.get('/hreceipt/:acno', (req, res) => {
    logic.hreceipt(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)
    })
})


app.get('/deleteac/:acno', (req, res) => {
    logic.deleteac(req.params.acno).then(result => {
        res.status(result.statusCode).json(result)
    })
})






app.listen(3000, () => {
    console.log("server started at 3000");
})



