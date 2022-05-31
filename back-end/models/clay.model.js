module.exports = (sequelize, Sequelize) => {
    const Clay = sequelize.define("clays", {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        pictureFolder: {
            type: Sequelize.STRING
        },
        pictureName : {
            type: Sequelize.STRING
        }
    });
    return Clay;
};
