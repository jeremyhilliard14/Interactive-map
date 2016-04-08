var interactiveMap = angular.module('interactiveMap', []);

interactiveMap.controller('interactiveMapController', function($scope){

	resetStates();
	$scope.states = states;
	$scope.smallStates = smallStates;
	console.log(smallStates);
	calculateStateTotals();

	$scope.stateClicked = function(state){
		var newColor = getNewColor(state);
		//calculateStateTotals();
	}

	function getNewColor(state){
		if (state.stateColor == "red"){
			//reassign the color from red to blue
			state.stateColor = "blue";
			$scope.blueStateVotes += state.electoralVotes;
			$scope.redStateVotes -= state.electoralVotes;
		}else if(state.stateColor == "blue"){
			state.stateColor = "open";
			$scope.openStateVotes += state.electoralVotes;
			$scope.blueStateVotes -= state.electoralVotes;
		}else if(state.stateColor == "open"){
			state.stateColor = "red";
			$scope.redStateVotes += state.electoralVotes;
			$scope.openStateVotes -= state.electoralVotes;
		}
		//calculateStateTotals();
		$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%'; 
		$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%'; 
		$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%'; 
		console.log($scope.blueStateVotes);
	}

	function calculateStateTotals(){
		$scope.redStateVotes = 0;
		$scope.openStateVotes = 0;
		$scope.blueStateVotes = 0;
		for(i=0; i<numStates; i++){
			if(blueStates[i]){
				$scope.blueStateVotes += blueStates[i].electoralVotes
			}else if(redStates[i]){
				$scope.redStateVotes += redStates[i].electoralVotes
			}else if(openStates[i]){
				$scope.openStateVotes += openStates[i].electoralVotes
			}
		}
		// $scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%'; 
		// $scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%'; 
		// $scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%'; 
		// console.log($scope.blueStateVotes);
	}

	$scope.blueWidth = (($scope.blueStateVotes / 538) * 100) + '%'; 
	$scope.redWidth = (($scope.redStateVotes / 538) * 100) + '%'; 
	$scope.openWidth = (($scope.openStateVotes / 538) * 100) + '%'; 
	console.log($scope.blueStateVotes);

})