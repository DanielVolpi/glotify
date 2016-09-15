'use strict';

export function AlbumService($http) 
{
	function query(albumID)
	{
		return $http
		(
			{
				method: 'GET',
				url: 'https://api.spotify.com/v1/albums/'+albumID+'/tracks'
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
