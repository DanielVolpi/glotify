import {routes} from './routes'; //Imports the "src\app\routes.js" file
import {AlbumService} from './services';
import {DiscographyService} from './services';
import {ArtistsService} from './services';
import {TrackService} from './services';
import {cdArtistSearch} from './directives';
import {cdFavorites} from './directives';
import {cdListAlbums} from './directives';
import {cdListTracks} from './directives';

angular.module('SpotifyGlobantApp', ['ngRoute'])
	.config(routes)
	.service('AlbumService', AlbumService)
	.service('DiscographyService', DiscographyService)
	.service('ArtistsService', ArtistsService)
	.service('TrackService', TrackService)
	.directive('cdArtistSearch',cdArtistSearch)
	.directive('cdFavorites',cdFavorites)
	.directive('cdListAlbums',cdListAlbums)
	.directive('cdListTracks',cdListTracks);