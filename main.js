var master = angular.module('master', [])




master.controller('mainController', function($scope){
	
$scope.showTheData = false
// $scope.showAudio = false


	$scope.findBands = function(){
		
	$scope.showData = function(event){


		$scope.showTheData = !$scope.showTheData
		// console.log('click works')

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
		// showAudio: false,
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
		tickets: 'tickets',
},
{
		headliner: 'Ben Howard',
		// showAudio: false,
		city: 'Denver' ,
		venue: 'Red Rocks',
		date: 'October 2, 2015',

},
{		headliner: 'Zappa Plays Zappa',
		// showAudio: false,
		city: 'Boulder' ,
		venue: 'Boulder Theater',
		date: ' October 2, 2015',
},
{		headliner: 'Chris Cornell',

		supporters:[{
		name:'Hemming',
		}],
		city: 'Denver',
		venue: 'The Paramount Theater',
		date: 'October 2, 2015',
},
{
		headliner: 'DJ Krush',
		city: 'Denver',
		venue:'The Bluebird Theater',
		date: 'October 2, 2015',





},]

console.log(bandList)


