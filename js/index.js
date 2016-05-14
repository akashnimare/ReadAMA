  function gitCtrl($scope, $http) {
      $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.loaded = false;
         $http.get("https://api.github.com/repos/" + $scope.username + "/ama/issues?state=all&per_page=300")
               .success(function (data) {
                  $scope.user = data;
                  $scope.loaded = true;
               })
               .error(function () {
                  $scope.userNotFound = true;
               });
        $scope.myFunction = function (href){
    $http.get(href).success(function(data1) {
    $scope.user1 = data1;
});
    }
      }
   }