module.exports = function(sequelize, DataTypes) {

    var user = sequelize.define("user", {
        Id: DataTypes.INTEGER,
        Name: DataTypes.STRING,
        Email: DataTypes.STRING(1234),
        Password: DataTypes.STRING,
        characterName: DataTypes.STRING,
        Faction: DataTypes.STRING,
        profilePic:"",
        Age: DataTypes.INTEGER,
        Primary Key (id) 
    });

    var factions = sequelize.define("factions", {
        Id: DataTypes.INTEGER,
        Title: DataTypes.STRING,
        Primary key (id)
    });

    var Class = sequelize.define("Class", {
        Id: DataTypes.INTEGER,
        Title: DataTypes.STRING,
        Description: DataTypes.STRING,
        Primary Key (id)
    });

    var myth = sequelize.define("myth", {
        Id: DataTypes.INTEGER, 
        Title: DataTypes.TEXT,
        Body:DataTypes.STRING,
        Primary Key (id)
    });

    var mythCard = sequelize.define("mythCard", {
        Id: DataTypes.INTEGER,
        CharacterName: DataTypes.STRING[15],
        catchPhrase: DataTypes.STRING, 
        StrengthPoints: DataTypes.INTEGER,
        HitPoints: DataTypes.INTEGER,
        DamagePoints: DataTypes.INTEGER,
        Faction: DataTypes.STRING,
    });

    };

