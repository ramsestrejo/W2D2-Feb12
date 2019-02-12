let http = require( 'http' );

const PORT = 3000;

let resources = {
	'/toronto' : 'Currently snowy',
	'/vancouver' : 'Super cold and rainy',
	'/miami' : 'Sunny',
	'/losangeles' : 'Chilly'
};

function handleRequest( request , response ) {
	if ( resources[ request.url ] ) {
		response.end( resources[ request.url ] );
	}
	else {
		response.statusCode = 404;
		response.end( 'Location not available' );
	}
}


let httpServer = http.createServer( handleRequest );

httpServer.listen( PORT , function( ) {
	console.log( "HTTP server listening on port " , PORT );
});
