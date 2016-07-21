(function(){
  var name = "portfolio",
  requires = ["ui.router"];
  angular.module(name,requires)
  .config([
    "$stateProvider",
    routerFunction
  ])
  .controller("mainController", mainControllerFunction)

  function routerFunction($stateProvider){
    $stateProvider
    .state("home",{
      url:"/home",
      templateUrl: "app/index.html",
      controller: "mainController",
      controllerAs:"mainControllerFunction"
    }).state("about",{
        url:"/about",
        templateUrl: "app/about.html",
        controller: "mainController",
        controllerAs:"mainControllerFunction"
      })
  }

  function mainControllerFunction($scope){
    $scope.app_details = {
      project_name: "Portfolio",
      client: "Michael L Parks",
      company_name: "WMI, Inc",
      phone: "(301)534-6284"
    }
  }
})();
