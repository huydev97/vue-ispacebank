/**
 * Bagbitcoin.js
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
      unique: true,
      required : true,
    },
    investment : {
      type : 'float',
      defaultsTo: 0,

    },
    interest_percent : {
      type : 'float',
      defaultsTo: 0,
    },
    balance_wallet : {
      type : 'float',
      defaultsTo: 0,

    },
    total_withdraw : {
      type : 'integer',
      defaultsTo: 0,

    },
    period : {
      type : 'integer',
      defaultsTo: 0,
 
    },
    next_received : {
      type : 'datetime',
    },
    del_flg : {
      type : 'integer',
      defaultsTo: 0,

    },
  },
  tableName : 'ispb_bagbits'
};

