'use strict';
/**
 * @author: Jaichand
 */
      /*self.showActions = false;*/
/*(function(){
  var app = angular.module('webYogAssignment',['ngTouch']);
  app.controller('webYogAPI',['$http',function($http){
      var self = this;
      $http.get('/api/').success(function(data) {
        self.messages = data;
        console.log(self.messages);
      }).error(function(err){
        console.log(err);
      });

      self.showMeg = function(id,$event) {
        console.log($event);
        $http.get('/api/'+ id).success(function(data){
          self.messageBody = data.preview;
          console.log(self.messageBody);
        });
      };

      self.deletemsg = function(id,userId,$event) {
        $event.stopPropagation();
        var input = [];
        input.user = userId;
        $http.delete('/api/'+ id,{params:{id:userId}})
        .success(function() {
          self.messages = self.messages.filter(function(mesg){
            return mesg.id !== id;
          });
        })
        .error(function(err) {
          console.log(err);
        });
      }; 
  }]);
})();*/
(function(){
  var app = angular.module('webYogAssignment', ['ngRoute','ngTouch','starter.controller','starter.service']);
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider
      /*.when('/dashboard',{
        url: '/dashboard',
        abstract
      })*/
      .when('/dashboard/messages',{
        templateUrl: '../../static/web/allMessages.html',
        controller: 'messagesController',
        controllerAs: 'webCtrl'
      })
      .when('/dashboard/message/:id',{
        templateUrl: '../../static/web/singleMessage.html',
        controller : 'singleMessageController',
        controllerAs: 'singleCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard/messages'
      });  
    }]);
})();
      
      // self.swipeLeft = function(id) {
      //    self.showActions = true;
      //    return true;
      // };