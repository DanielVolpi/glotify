'use strict';

export function ArtistsService($http) 
{
	var searchType = 'artist';
	
	function query(artistName)
	{
		return $http
		(
			{
				method: 'GET',
				url: 'https://api.spotify.com/v1/search?q='+artistName+'&type='+searchType
			}
		).then
		(
			function(response)
			{
				return response.data.artists.items;
			},
			function()
			{
			}
		);
	}
	
	this.query = query;
}