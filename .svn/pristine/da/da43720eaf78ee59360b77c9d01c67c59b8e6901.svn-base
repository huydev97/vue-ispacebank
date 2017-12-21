/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user : {
      type: 'integer',
      required: true
    },
    type : {
      type : 'integer',
      required : true
    },
    package : {
      type : 'integer',
      required : true
    },
    sender : {
      type : 'string',
    },
    note : {
      type : 'string',
    },
    state: {
      type : 'integer',
      defaultsTo: 0
    },
    del_flg : {
      type : 'integer',
      defaultsTo: 0
    }
  },
  tableName : 'ispb_transactions'
};

