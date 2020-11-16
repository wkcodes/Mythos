module.exports = function (sequelize, DataTypes) {

    //Creating user attributes
    var user = sequelize.define("user", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        characterName: DataTypes.STRING,
        faction: DataTypes.STRING,
        profilePic: DataTypes.STRING,
        img1: DataTypes.STRING,
        img2: DataTypes.STRING,
        age: DataTypes.INTEGER,
    });

    //Associating user with myth
    user.associate = function(models) {
        user.hasOne(models.myth);
    } 
    return user;
};
