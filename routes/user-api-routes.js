let db = require("../models")

//testing the database
app.get('/add', (req, res) => {
    const data = {
      name: 'bob',
      email: 'bob@gmail.com',
      characterName: 'Bobthar'
    }
  
    user.create({
      name,
      email,
      characterName
    })
      .then()
      .catch(err => console.log(err))
  })

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

    app.post("/api/users", function(req, res) {
        db.user.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
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