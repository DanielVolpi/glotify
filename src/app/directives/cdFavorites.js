'use strict';

export function cdFavorites() 
{
return {
				restrict: 'E',
				scope: 
				{
				},
				templateUrl: 'app/directives/templates/favorites.html',
				controller: function($scope, $localStorage)
				{
					//VARIABLES
					var listOfFavoriteTracks;
					
					//FUNCTIONS
					function getListOfFavoriteTracks() { return listOfFavoriteTracks; };
					
					function unFavorite(track) { listOfFavoriteTracks.splice(listOfFavoriteTracks.indexOf(track),1); }
					
					function loadData() { listOfFavoriteTracks = $localStorage.message; };
					
					function isEmpty()
					{
						if(listOfFavoriteTracks == undefined)
							return true;
						else
							return listOfFavoriteTracks.length == 0;
					}
					
					//PUBLIC DECLARATIONS
					this.unFavorite = unFavorite;
					this.getListOfFavoriteTracks = getListOfFavoriteTracks;
					this.loadData = loadData;
					this.isEmpty = isEmpty;
					
					//STARTUP CODE
					loadData();
				},
				controllerAs: "favCtrl"
			};
}