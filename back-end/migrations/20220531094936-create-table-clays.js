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
    db.createTable('clays', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        name: 'string',
        slug: 'string',
        description: 'string',
        pictureFolder: 'string',
        pictureName: 'string',
        createdAt: 'string',
        updatedAt: 'string'
    }, () => {
        console.log('TABLE CLAYS CREATED SUCCESSFULLY!');
    });

    return null;
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
