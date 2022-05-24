module.exports = (sequelize, Sequelize) => {
    const Clay = sequelize.define("clay", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return Clay;
};
