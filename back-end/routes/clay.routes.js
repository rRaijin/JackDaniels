module.exports = app => {
    const clays = require("../controllers/clay.controller.js");
    var router = require("express").Router();

    router.post("/", clays.create);

    router.get("/", clays.findAll);

    router.get("/published", clays.findAllPublished);

    router.get("/:id", clays.findOne);

    router.put("/:id", clays.update);

    router.delete("/:id", clays.delete);

    router.delete("/", clays.deleteAll);

    app.use('/api/clays', router);
};
