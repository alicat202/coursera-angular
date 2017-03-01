
(function (){
    'use strict'; 
    
    angular.module('LunchCheck', [])
        
        .controller('LunchCheckController', LunchCheckController);
                    
            LunchCheckController.$inject = ["$scope", "$filter"]; 
            
            function LunchCheckController ($scope, $filter) {
            
                $scope.menuItems = "";
                
                $scope.checkItems = function () {
                    
                    $scope.enterredItems = $scope.menuItems.split(",");
                    
                    if ($scope.menuItems != ""){
                        
                        if ($scope.enterredItems.length <= 3){
                        $scope.message = "Enjoy!";
                        $scope.colorClass = "green";
                        } else if ($scope.enterredItems.length > 3) {
                           $scope.message = "Too much!";
                           $scope.colorClass = "red";
                        }
                        
                    } else {
                        $scope.message = "Please enter data first"; 
                        $scope.colorClass = "red";
                    }
                   
                }

         };  
       
})(); 
