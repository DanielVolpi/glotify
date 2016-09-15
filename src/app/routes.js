import 'angular-route';

export function routes($routeProvider, $locationProvider) 
{
    $locationProvider.html5Mode
	(
		{
			enabled: true,
			requireBase: false,
			rewriteLinks: true,
		}
	);
	
	$routeProvider
		.when
		(
			'/home',
			{
				templateUrl:	'app/views/start.html',
				//controller:		'startPageController',
				//controllerAs:	'strPCtrl'
			}
		)
		.when
		(
			'/search',
			{
				templateUrl:	'app/views/search.html',
				//controller:		'searchPageController',
				//controllerAs:	'srhPCtrl'
			}
		)
		.when
		(
			'/result',
			{
				templateUrl:	'app/views/result.html',
				//controller:		'resultPageController',
				//controllerAs:	'rstPCtrl'
			}
		)
		.otherwise( { redirectTo: '/home'} );
}