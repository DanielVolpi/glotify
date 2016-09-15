'use strict';

export function cdListTracks() 
{
return {
				restrict: 'E',
				scope: 
				{
					albumid: '@'
				},
				templateUrl: 'app/directives/templates/listtracks.html',
				controller: function(AlbumService, $scope, $localStorage)
				{
					//VARIABLES
					var listOfFavoriteTracks;
					var listOfTracks;
					
					//FUNCTIONS
					function getListOfFavoriteTracks() { return listOfFavoriteTracks; };
					
					function getListOfTracks() { return listOfTracks; };
					
					function getTracksFrom(albumID)
					{
						AlbumService.query(albumID).then
						(
							(pTracks) => { listOfTracks = pTracks; }, 
							(error) => { console.log(error); }
						);
					};
					
					function addToFavorite(track)
					{
						if(listOfFavoriteTracks == undefined)
						{
							listOfFavoriteTracks = [];
							var trackToAdd = {id: track.id , name: track.name};
							listOfFavoriteTracks.push(trackToAdd);
							$localStorage.message = listOfFavoriteTracks;
						}
						else
						{
							
							var isAFavoriteAlready=false;
							
							for(var e=0;e<listOfFavoriteTracks.length;++e)
							{
								if(track.id == listOfFavoriteTracks[e].id)
									isAFavoriteAlready = true;
							}
							if(!isAFavoriteAlready)
							{
								var trackToAdd = {id: track.id , name: track.name};
								listOfFavoriteTracks.push(trackToAdd);
								$localStorage.message = listOfFavoriteTracks;
							}
						}
					};
					
					//PUBLIC DECLARATIONS
					this.getListOfFavoriteTracks = getListOfFavoriteTracks;
					this.addToFavorite = addToFavorite;
					this.getListOfTracks = getListOfTracks;
					this.getTracksFrom = getTracksFrom;
					
					//STARTUP CODE
					listOfFavoriteTracks = $localStorage.message;
					getTracksFrom($scope.albumid);
				},
				controllerAs: "lsttrcCtrl"
			};
}