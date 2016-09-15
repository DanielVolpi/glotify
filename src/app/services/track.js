'use strict';

export function TrackService($http) 
{
	function query(trackID)
	{
		return $http
		(
			{
				method: 'GET',
				url: 'https://api.spotify.com/v1/tracks/'+trackID
			}
		).then
		(
			function(response)
			{
				return response.data;
			},
			function()
			{
			}
		);
	}
	
	this.query = query;
}