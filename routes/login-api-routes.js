// This route should validate the email and password input with what is in database.

let db = require("../models")
//const passport = require("../config/passport");

module.exports = function (app) {
    app.post("/api/login", function (req, res) {

        if (!req.body.email) {
            return res.status(500).send({ message: "Please provide email" })
        }

        if (!req.body.characterName) {
            return res.status(500).send({ message: "Please provide character name" })
        }

        let query = {}

        query.email = req.body.email
        query.characterName = req.body.characterName

        db.user.findOne({
            where: query
        }).then(function (user) {
            if (user === null) {
                console.log("fail")
                return res.status(404).send({ message: "User not found" })
            }

            req.session.userId = user.id
            req.session.charName = user.characterName
            console.log("success")
            return res.json(user)
            


        })
    })
}