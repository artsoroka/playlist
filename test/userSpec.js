/*global expect*/ 
var request = require('request'); 
var config  = require('../config'); 
var timeout = 5000; 
var baseUrl = 'http://localhost:' + config.App.port;  

describe("User api endpoints", function() {
  it("Should list all users", function(done) { 
    
    request.get(baseUrl + '/api/users', function(error, response, body){
        expect(error).toBe(null);
        expect(response.statusCode).toEqual(200); 
        var data = JSON.parse(body); 
        expect(data[0].name).toEqual('admin');
        expect(data[1].name).toEqual('user1');
        done();         
    }); 
    
  }, timeout);
  
  it("Should find existing user by id", function(done) {
    
    request.get(baseUrl + '/api/users/1', function(error, response, body){
        expect(error).toBe(null);
        expect(response.statusCode).toEqual(200); 
        var data = JSON.parse(body); 
        expect(data.length).toEqual(1); 
        if( ! data.length) return done(false); 
        expect(data[0].name).toEqual('admin');
        
        request.get(baseUrl + '/api/users/2', function(error, response, body){
            expect(error).toBe(null);
            expect(response.statusCode).toEqual(200); 
            var data = JSON.parse(body); 
            expect(data.length).toEqual(1); 
            if( ! data.length) return done(false); 
            expect(data[0].name).toEqual('user1');
            done();     
        });
    }); 
        
  }, timeout);
  
  it("Should respond with 404 if user not found", function(done) {
    
    request.get(baseUrl + '/api/users/101', function(error, response, body){
        expect(error).toBe(null);
        expect(response.statusCode).toEqual(404); 
        var data = JSON.parse(body); 
        expect(data.err).toEqual('No user found with such id');
        done();         
    }); 
    
  }, timeout);
  
  it("Should successfuly delete user", function(done) {
    
    request.del(baseUrl + '/api/users/1', function(error, response, body){
        expect(error).toBe(null);
        expect(response.statusCode).toEqual(200); 
        var data = JSON.parse(body); 
        expect(data.status).toEqual('deleted');
        done();         
    }); 
    
  }, timeout); 
  
  it("Should get 404 if attempting to delete non existing user", function(done) {
    
    request.del(baseUrl + '/api/users/1', function(error, response, body){
        expect(error).toBe(null);
        expect(response.statusCode).toEqual(404); 
        var data = JSON.parse(body); 
        expect(data.err).toEqual('No record found with such id, nothing to delete');
        done();         
    });
    
  }, timeout);
  
  
});
 