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
      package : {
        type : 'integer',
        required : true
      },
      interest_percent : {
        type : 'integer',
        defaultsTo: 0
      },
      period : {
        type : 'integer',
        defaultsTo: 20
      },
      del_flg : {
        type : 'integer',
        defaultsTo: 0
      }
    },
    tableName : 'ispb_packages'
  };
  
  