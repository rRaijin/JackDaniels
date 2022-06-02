'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
    db.insert(
        'clays',
        ['name', 'slug', 'description', 'pictureFolder', 'pictureName', 'createdAt', 'updatedAt'],
        [
            'Neptun',
            'neptun',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis recusandae culpa provident fuga quaerat aliquid error aspernatur. Eaque ratione incidunt assumenda porro labore dolorem fuga libero aut repudiandae quae.',
            'clays',
            'neptun.png',
            new Date().getTime(),
      new Date().getTime()
        ]
    );
    
    return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
