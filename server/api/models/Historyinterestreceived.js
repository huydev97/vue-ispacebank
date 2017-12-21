/**
 * Historyinterestreceived.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id : {
      type: 'integer',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user : {
      type: 'integer',
      required : true,
    },
    pv_received : {
      type : 'float',
      required : true,
    },
    interset_received : {
      type : 'float',
      required : true,
    },
    name : {
      type : 'string',
    },
    note : {
      type : 'string',
    }
  },
  tableName : 'ispb_history_interests'
};

