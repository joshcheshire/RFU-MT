// var test = function(){
// 	console.log('test')
// }
// test()



var master = angular.module('master', [])




master.controller('mainController', function($scope){
	
$scope.showTheData = false
$scope.showAudio= false

	$scope.findBands = function(){
		
	$scope.showData = function(event){


		$scope.showTheData = !$scope.showTheData
		console.log('click works')

		}

	$scope.playAudio = function(event){
		$scope.showAudio = !$scope.showAudio

	}


$scope.bandList = bandList

	}

})


var bandList = [{

		headliner:'And So I watch You From Afar',
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
},
{
		headliner: 'Ben Howard',
		city: 'Denver' ,
		venue: 'Red Rocks',
		date: 'October 2, 2015',

},
{		headliner: 'Zappa Plays Zappa',
		city: 'Boulder' ,
		venue: 'Boulder Theater',
		date: ' October 2, 2015'


}]

console.log(bandList)

