let db = require("../models");

module.exports = function (app) {
    app.get("/profile", function (req, res) {
        console.log(req.session.userId)
        if(req.session.userId === undefined){
            return res.redirect("/login")
        }
        
        db.myth.findAll({
            where: {
                userId: req.session.userId
            },raw:true
        }).then(function (dbMyth) {
            res.render("profile", {myths: dbMyth, characterName: req.session.charName});
        });
    });


    app.post("/api/profile", function (req, res) {
        
        db.myth.create(req.body).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.delete("/api/profile/:mythId", function (req, res) {
        db.myth.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.put("/profile", function (req, res) {
        db.myth.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbMyth) {
                res.json(dbMyth);
            });
    });
};