let express = require( "express" );
let expressServer = express( );
let usersdb = require( "./users" );
let bodyParser = require( "body-parser" );

expressServer.set( 'view engine' , 'ejs' );
expressServer.use( bodyParser.urlencoded( { extended : true } ) );

const PORT = 8080;

expressServer.get( "/" , function( req , res ) {
	res.render( "filter" , { } );
});

expressServer.get( "/users" , function( req , res ) {
	res.render( "users" , { users :  usersdb.getAll( ) } );
});

expressServer.post( "/users" , function( req , res ) {
	res.render( "users" , { users : usersdb.findByName( req.body.filter ) });
});


expressServer.get( "/users/:id" , function( req , res ) {
	res.render( "user" , { user : usersdb.getById( req.params.id ) } );
});


expressServer.listen( PORT , function( ) {
	console.log( 'Express server listening to port ' , PORT );
});