let db = require("../models");

module.exports = function (app) {
    app.get("/api/myths", function (req, res) {
        let query = {};
        if (req.query.userID) {
            query.userID = req.query.userID;
        }

        db.myth.findAll({
            where: query,
            include: [db.user]
        }).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.get("/api/myths/:id", function (req, res) {
        db.myth.findAll({
            where: {
                userId: req.params.id
            },
            include: [db.user]
        }).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.post("/api/myths", function (req, res) {
        console.log(req.body)
        db.myth.create(req.body).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.delete("/api/myths/:id", function (req, res) {
        db.myth.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbMyth) {
            res.json(dbMyth);
        });
    });

    app.put("/api/myths", function (req, res) {
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