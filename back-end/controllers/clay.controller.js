const db = require("../models");

const Clay = db.clays;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const data = {
        title: 'clay-1',
        description: 'clay 1 description',
        published: true
    };

    Clay.create(data)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    return Clay.findAll()
      .then(data => {
            res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.findOne = (req, res) => {
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};
