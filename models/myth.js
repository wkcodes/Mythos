module.exports = function (sequelize, DataTypes) {

    //Create 'myth' attributes 
    var myth = sequelize.define("myth", {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    });

    //Associate myth with user
    myth.associate = function(models){
        myth.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return myth;
};