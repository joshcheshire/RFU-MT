var master = angular.module('master', [])




master.controller('mainController', function($scope){
	
$scope.showTheData = false


	$scope.findBands = function(){
		console.log($scope.search)
		

	$scope.showData = function(event){

		$scope.showTheData = !$scope.showTheData

		}

	$scope.playAudio = function(data){
		data.showAudio = !data.showAudio
		console.log(data.headliner)
	}


$scope.bandList = bandList
	


		}
	

})


var bandList = [{

		headliner:'And So I watch You From Afar', 
		// img: 'http://cdn.shopify.com/s/files/1/0015/2602/files/HEIRS_NEW_BANNER.jpg?17079',
		headlinerSound:"../audio-files/test.mp3", 
		supporters:[{
		name:'Mylet'
		}, 
		
		{name:'Blis.' 

		},
		{name:'Cult of the Lost Cause'
		
		}],
		
		city:'Denver' ,
		venue: 'Marquis Theater',
		date: 'October 2, 2015',
		tickets: 'http://www.ticketweb.com/t3/sale/SaleEventDetail?dispatch=loadSelectionData&eventId=6042955&pl=marquis',
},
{
		headliner: 'Ben Howard',
		// showAudio: false,
		city: 'Denver' ,
		venue: 'Red Rocks',
		date: 'October 2, 2015',
		tickets: 'http://www.axs.com/events/275978/ben-howard-tickets',
		// img: 'http://blog.lovespeaking.com/wp-content/uploads/2013/03/mercury-prize-ben-howard-every-kingdom.jpg',

},
{		headliner: 'Papadosio',
		// showAudio: false,
		city: 'Boulder' ,
		venue: 'Boulder Theater',
		date: ' October 2, 2015',
		tickets: 'https://bouldertheater.frontgatetickets.com/event/7dtj5yw14fsm4zqy',
},
{		headliner: 'Chris Cornell',
		supporters:[{
		name:'Hemming',
		}],
		city: 'Denver',
		venue: 'The Paramount Theater',
		date: 'October 2, 2015',
		tickets: 'http://www.altitudetickets.com/event/chris-cornell-3928/',
},
{
		headliner: 'DJ Krush',
		city: 'Denver',
		venue:'The Bluebird Theater',
		date: 'October 2, 2015',
		tickets: 'http://www.axs.com/events/281757/dj-krush-tickets?skin=bluebird&src=AEGLIVE_WBIRDDEN030115VEN001',
},		
{		headliner: 'The Black Dahlia Murder',
		city: 'Montreal',
		venue: 'Les Foufounes Electrques',
		date: 'October 2, 2015',
		tickets: 'https://tickets-ca.ticketfly.com/event/TheBlackDahliaMurder6902738',



},]

console.log(bandList)


