angular.module('App', []).controller('Ctrlx', ['$scope',
	function($scope) {
	  $scope.Profiles = [
	      {
	        rank : "1",
	        name : "Bitcoin",
			totals : "21M",
			consensus : "PoW",
			ticker : "BTC",
	        editable : false
	      },
	      {
	        rank : "2",
	        name : "Ethereum",
			totals : "144M",
			consensus : "PoW",
			ticker : "ETH",
	        editable : false
	      }
	    ];
	 
	 $scope.entity = {}
	    
	 $scope.edit = function(index){
	   $scope.entity = $scope.Profiles[index];
	   $scope.entity.index = index;
	   $scope.entity.editable = true;
	 }
	    
	 $scope.delete = function(index){
	   $scope.Profiles.splice(index,1);
	 }
	    
	 $scope.save = function(index){
	   $scope.Profiles[index].editable = false;
	   
	 }
	    
	 $scope.add = function(){
	   $scope.Profiles.push({
	    rank : "",
	    name : "",
		totals : "",
		consensus : "",
		ticker : "",
        editable : true
	   })
	 }
	}
]);