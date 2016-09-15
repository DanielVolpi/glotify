'use strict';

export function cdArtistSearch() 
{

	return {
		restrict: 'E',
		scope: 
		{
		},
		templateUrl: 'app/directives/templates/artistsearch.html',
		controller: function(ArtistsService, $scope, $localStorage)
		{
			//VARIABLES
			var currentArtist;
			var listOfArtists = [];
			
			//FUNCTIONS
			function searchForArtist(artistName)
			{
				ArtistsService.query(artistName).then
				(
					(pArtist) => { listOfArtists = pArtist; },
					(error) => { console.log(error); }
				);
			};
			
			function setCurrentArtist(artist) 
			{
				$localStorage.currentArtist = {name: artist.name, id: artist.id};
				currentArtist = artist;
			};
			
			function getListOfArtists() { return listOfArtists; };
			
			function getCurrentArtist() { return currentArtist; };
			
			//PUBLIC DECLARATIONS
			this.getListOfArtists = getListOfArtists;
			this.searchForArtist = searchForArtist;
			this.getCurrentArtist = getCurrentArtist;
			this.setCurrentArtist = setCurrentArtist;
			
			//STARTUP CODE
		},
		controllerAs: "artsrchCtrl"
	};

}