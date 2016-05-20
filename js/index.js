  function gitCtrl($scope, $http) 
  {
            $scope.main = 
            {
               page: 1
            };
            $scope.getGitInfo = function () 
            {
            $scope.userNotFound = false;
            $scope.loaded = false;
            $scope.nouser = false;
            $http.get("https://api.github.com/repos/"+ $scope.username +"/ama/issues?state=all&page="+ $scope.main.page + "&per_page=100")
                 .success(function (data) 
                 {
                  $scope.user = data;
                  $scope.loaded = true;
                 })
                  .error(function () 
                  {
                    $scope.userNotFound = true;
                  });
            $scope.myFunction = function (href)
            {
            $http.get(href).success(function(data1) 
            {
            $scope.user1 = data1;
            });
            }
            }
            $scope.nextPage = function() 
            {
                  $scope.main.page++;
                  $scope.getGitInfo();
            };
            $scope.prePage = function() {          
                  $scope.main.page--;
                  $scope.getGitInfo();
            };

   }
