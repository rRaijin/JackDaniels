module.exports = {
    HOST: "localhost",
    USER: "roma",
    PASSWORD: "123456",
    DB: "jackdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};