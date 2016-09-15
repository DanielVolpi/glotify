'use strict';

export function cdListAlbums() 
{
return {
				restrict: 'E',
				scope: 
				{
					//artistid: '@'
				},
				templateUrl: 'app/directives/templates/listalbums.html',
				controller: function(DiscographyService,$scope,$localStorage,$routeParams)
				{
					//VARIABLES
					var listOfAlbums = [];
					
					//FUNCTIONS
					function getListOfAlbums() { return listOfAlbums; };
					
					function getAlbumsBy(artistID)
					{
						DiscographyService.query(artistID).then
						(
							(pAlbums) => { listOfAlbums = pAlbums; }, 
							(error) => { console.log(error); }
						);
					};
					
					//PUBLIC DECLARATIONS
					this.getAlbumsBy = getAlbumsBy;
					this.getListOfAlbums = getListOfAlbums;
					
					//STARTUP CODE
					getAlbumsBy($routeParams.id);
				},
				controllerAs: "lstalbCtrl"
			};
}