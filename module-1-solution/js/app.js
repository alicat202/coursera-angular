
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
                        } else if ($scope.enterredItems.length > 3) {
                           $scope.message = "Too much!"; 
                        }
                        
                    } else {
                        $scope.message = "Please enter data first"; 
                    }
                   
                }

         };  
       
})(); 
