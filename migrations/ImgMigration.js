'use strict';

module.exports = {
    
    up: function(queryInterface, Sequelize) {
      // logic for transforming into the new state
      return Promise.all(
          [
            queryInterface.addColumn('users','img1', {
                type: Sequelize.STRING
            }),
            queryInterface.addColumn('users','img2', {
                type: Sequelize.STRING
            })
          ])
        },
   
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
    }
  }