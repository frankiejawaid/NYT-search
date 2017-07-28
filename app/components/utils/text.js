// Include the axios package for generate HTTP requests
var axios = require('axios');

var helpers = {

	// This function let us to running the query to The New York Times API. 
	runQuery: function(query, startDate, endDate){
	 	
	 	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	 	var otherKey = "899f9cbbce8c41de9ca37a6bf43a4dd8";
		var authKey = "?api-key=d9dfd6dfaf0b4057b6803a83b40d2b38";
		var query = "?q="+query+"";
		var startDate = "?begin_date="+startDate+"";
		var endDate = "?end_date="+endDate+"";
		var params = query+startDate+endDate;
		console.log(queryURL+authKey+params);
	 	return axios.get(queryURL+authKey+params)
	 		.then(function(response){

	 			console.log(response);
	 			return response.data.response.docs;
	 	});

	},

	// This function hits our own server to retrieve the record of query results
		getHistory: function(){

	 	return axios.get('/api')
	 		.then(function(response){

	 			console.log(response);
	 			return response;
	 		});
		},


}


// We export the helpers function 
module.exports = helpers;