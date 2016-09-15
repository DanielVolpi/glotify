'use strict';

export function DiscographyService($http) 
{
	function query(artistID)
	{
		var limit = 50;
		var market = 'AR';
		
		return $http
		(
			{
				method: 'GET',
				url: 'https://api.spotify.com/v1/artists/'+artistID+'/albums?market='+market+'&limit='+limit
			}
		).then
		(
			function(response)
			{
				return response.data.items;
			},
			function()
			{
			}
		);
	}
	
	this.query = query;
}