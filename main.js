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

	$scope.playSupporterAudio= function(data){
		data.showSupAudio = !data.showSupAudio
		console.log(data.showSupAudio)
	}


$scope.bandList = bandList
	


		}
	

})


var bandList = [{

		headliner:'And So I watch You From Afar', 
		// img: 'http://cdn.shopify.com/s/files/1/0015/2602/files/HEIRS_NEW_BANNER.jpg?17079',
		headlinerSound:"test.mp3", 
		supporters:[{
		
		name:'Blis.' ,
		supporterSound: "blis.mp3",
}],
		
		city:'Denver,CO' ,
		venue: 'Marquis Theater',
		date: 'October 2, 2015',
		tickets: 'http://www.ticketweb.com/t3/sale/SaleEventDetail?dispatch=loadSelectionData&eventId=6042955&pl=marquis',
},
{
		headliner: 'Ben Howard',
		headlinerSound:"ben.mp3",
		city: 'Denver, CO' ,
		venue: 'Red Rocks',
		date: 'October 2, 2015',
		tickets: 'http://www.axs.com/events/275978/ben-howard-tickets',
		// img: 'http://blog.lovespeaking.com/wp-content/uploads/2013/03/mercury-prize-ben-howard-every-kingdom.jpg',

},
{		headliner: 'Chris Cornell',
		headlinerSound:"cornell.mp3",		
		city: 'Denver,CO',
		venue: 'The Paramount Theater',
		date: 'October 2, 2015',
		tickets: 'http://www.altitudetickets.com/event/chris-cornell-3928/',
},


{
		headliner: 'No one is playing here. They were all shot over the weekend. sorry',
		city: 'Chicago',
},



{		headliner: 'Between The Buried And Me',
		headlinerSound:"btbam.mp3",
		city: 'Trondheim, Norway',
		venue: 'Trondheim Metal Fest',
		date: 'October 2, 2015',
		tickets: '',



},]

console.log(bandList)


