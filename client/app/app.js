const app = angular.module('Zoo', ['ngRoute'])

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('/add', {
        templateUrl: 'partials/addAnimals.html',
        controller: 'AddAnimalCtrl'
      }).when('/zoo', {
        templateUrl: 'partials/zoo.html',
        controller: 'ZooCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])