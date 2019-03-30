//imports MySql connection
var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb){
        connection.query('SELECT * FROM '+tableInput+';', function(err, result) {
            if(err) throw err;
            cb(result)
        })
    },

    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result){
            if(err) throw err;
            cb(result);
            })
        } 
    }


//exports the orm object for the model
module.exports = orm;