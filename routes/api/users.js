var express = require('express');
var router  = express.Router(); 
var db 		= require('../../lib/db.js'); 

router.get('/', function(req,res){
	
	db
		.select('name')
		.from('users')
		.then(function(users){
			res.json(users); 
		})
		.catch(function(err){
			res.status(500).json({
				err: err
			}); 
		})

}); 

router.get('/:userId', function(req,res){

	db('users')
		.where('id', req.params.userId)
		.select('name')
		.then(function(user){
			if( ! user.length ) 
				return res.status(404).json({
					err: 'No user found with such id' 
				}); 

			res.json(user); 
		})
		.catch(function(err){
			res.status(500).json({
				err: err
			}); 
		})

}); 

module.exports = router; 