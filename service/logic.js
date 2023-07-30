const db = require('./db')





register = (acno, uname, psw) => {
    return db.User.findOne({ acno: acno }).then(result => {
        if (result) {


            return {
                message: "user already exist",
                status: false,
                statusCode: 404
            }
        }
        else {


            newUser = new db.User({

                acno: acno,
                uname: uname,
                psw: psw,
                tickets: []


            })

            newUser.save()

            return {
                message: "Registered Succesfully",
                status: true,
                statusCode: 200
            }
        }
    })
}



login = (acno, psw) => {

    return db.User.findOne({ acno:acno, psw:psw }).then(user => {
        if (user) {

          

            return {
                message: "login successfull",
                status: true,
                statusCode: 200,
                currentUser: user.uname,
                currentAcno: user.acno,
                
            }
        }
        else {

            return {
                message: "Incorrect Accountnumber or Password",
                status: false,
                statusCode: 404
            }
        }
    })
}










ticket = (name, acno, age, adress, npass, cn,cdstn, psw, date) => {
    return db.User.findOne({acno: acno, psw:psw}).then(user => {
        if (user) {
            user.tickets.push(
                {
                    name: name,
                    acno: acno,
                    age: age,
                    adress: adress,
                    npass: npass,
                    cn: cn,
                    cdstn:cdstn,
                    psw: psw,
                    date: date
                }
            )
            user.save()
            return {
                message: "Booking Successfull",
                status: true,
                statusCode: 200

            }
        }
        else {
            return {
                message: "Invalid Data",
                status: false,
                statusCode: 404
            }
        }
    })
}









hticket = (name, acno, age, adress, nadm,nac, cn,cdstn,type, psw, date) => {
    return db.User.findOne({acno: acno, psw:psw}).then(user => {
        if (user) {
            user.htickets.push(
                {
                    name: name,
                    acno: acno,
                    age: age,
                    adress: adress,
                    nadm: nadm,
                    nac:nac,
                    cn: cn,
                    cdstn:cdstn,
                    type:type,
                    psw: psw,
                    date: date
                }
            )
            user.save()
            return {
                message: "Booking Successfull",
                status: true,
                statusCode: 200

            }
        }
        else {
            return {
                message: "Invalid Data",
                status: false,
                statusCode: 404
            }
        }
    })
}




uticket = (name, acno, age, adress, nadm,nac, cn, psw, date) => {
    return db.User.findOne({acno: acno, psw:psw}).then(user => {
        if (user) {
            user.htickets.push(
                {
                    name: name,
                    acno: acno,
                    age: age,
                    adress: adress,
                    nadm: nadm,
                    nac:nac,
                    cn: cn,
                    psw: psw,
                    date: date
                }
            )
            user.save()
            return {
                message: "Booking Successfull",
                status: true,
                statusCode: 200

            }
        }
        else {
            return {
                message: "Invalid Data",
                status: false,
                statusCode: 404
            }
        }
    })
}




receipt = (acno) => {
    return db.User.findOne({ acno: acno }).then((user => {
        if (user) {
            return {
                message:user.tickets,
                status: true,
                statusCode: 200,
            }
        }
        else{
            return {
                message: "Invalid User",
                status: false,
                statusCode: 404
            }
        }
    }))
}



hreceipt = (acno) => {
    return db.User.findOne({ acno: acno }).then((user => {
        if (user) {


            

            return {
                message:user.htickets,
                status: true,
                statusCode: 200,
            }
        }
        else{
            return {
                message: "Invalid User",
                status: false,
                statusCode: 404
            }
        }
    }))
}



deleteac = (acno) => {
    return db.User.deleteOne({ acno: acno }).then((user => {
        if (user) {
            return {
                message:"Account Deleted",
                status: true,
                statusCode: 200,
            }
        }
        else{
            return {
                message: "Invalid User",
                status: false,
                statusCode: 404
            }
        }
    }))
}



module.exports = {
    register, login, ticket,hticket,receipt,hreceipt,deleteac,uticket
}