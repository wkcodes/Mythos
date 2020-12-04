let db = require("../models")

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        db.user.findAll({
            defaultScope: {
                include: [db.myth]
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

    app.get("/api/users/:id", function(req, res) {
        db.user.findOne({
            where: {
                id: req.params.id
            },
            include: [db.myth]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.put("/api/users/:id", function(req, res) {
        console.log("1")
        let img1 = req.body.img1
        let img2 = req.body.img2

        db.user.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(user => {
            console.log("2")
            console.log(img1, img2)
            user.update({img1: img1, img2: img2}).then(updatedUser => {
                console.log(updatedUser)
                res.json(updatedUser)
            })
        })
        
    })

    app.post("/api/users", function(req, res) {
        db.user.create(req.body).then(function(dbUser) {
            console.log(dbUser)
            res.json(dbUser.id);

        }).catch(err => console.log(err))
    });

    app.delete("/api/users/:id", function(req, res) {
        db.user.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

};