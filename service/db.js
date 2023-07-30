const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/busAppServer', { useNewUrlParser: true })
const User = mongoose.model('user',
    {
        acno: Number,
        uname: String,
        psw: String,
        tickets:[],
        htickets:[]

    })
module.exports = {
    User
}