export function up(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
        'users',
        'img1',
        Sequelize.STRING
    )
}

export function up(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
        'users',
        'img2',
        Sequelize.STRING
    )
}

export function down(queryInterface, Sequelize) {
    // logic for reverting the changes
}