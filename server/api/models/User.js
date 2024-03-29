/**
 * User.js
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
    fullname: {
      type: 'string',
    },
    username : {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      email: true,
      unique :true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    age: {
      type: 'string',
    },
    sex: {
      type: 'string',
    },
    phone: {
      type: 'string',
      unique :true,
      required: true
    },
    country : {
      type :'string'
    },
    region: {
      type: 'string',
    },
    eWallet : {
      type: 'string',
    },
    referer : {
      type : 'string',
    },
    token : {
      type : 'string'
    },
    reasonBlock : {
      type : 'string'
    },
    isAdmin: {
      type: 'integer',
      defaultsTo: 0,
    },
    isActive: {
      type: 'integer',
      defaultsTo: 1,
    },

    del_flg: {
      type: 'integer',
      defaultsTo: 0,
    }
  },
  tableName : 'ispb_users'
};

