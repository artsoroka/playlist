module.exports = {
	App: {
		port: process.env.PLAYLIST_PORT || 8080
	}, 
	db: {
	    user     : process.env.PL_DB_USER || 'playlistadmin', 
	    password : process.env.PL_DB_PSWD, 
	    database : process.env.PL_DB_NAME || 'playlist', 
	    port	 : process.env.PL_DB_PORT || 3306
	}
}; 