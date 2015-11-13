# PlayList app 

## Installation 

Clone repostory and install dependencies 
```
$ git clone https://github.com/artsoroka/playlist
$ cd playlist 
$ npm intall 
```

Create database and update ```config.js``` or set your environment variables 
* PLAYLIST_PORT
* PL_DB_USER  
* PL_DB_PSWD  
* PL_DB_NAME  
* PL_DB_PORT 

Run migrations 
```
$ npm run db 
```
## API endpoints

|request   | url  | desctiption  |
|---|---|---|
| ```GET```  | /users  | List all users |
| ```GET```  | /users/{userId}  | Get user by id |
| ```DELETE```  | /users/{userId}  | Delete user | 