/**
 * @author: Jaichand
 */
(function(){
  var app = angular.module('webYogAssignment',['ngTouch']);
  app.controller('webYogAPI',['$http',function($http){
      var self = this;
      /*self.showActions = false;*/
      $http.get('/api/').success(function(data) {
        self.message = data;
        console.log(self.message);
      }).error(function(err){
        console.log(err);
      });

      self.showMeg = function(id) {
        $http.get('/api/'+ id).success(function(data){
          self.messageBody = data.preview;
          console.log(self.messageBody);
        });
      }
      self.deletemsg = function(id,userId) {
        var input = [];
        input.user = userId;
       $http.delete('/api/'+ id,{params:{id:userId}}).success(function(data) {
        console.log(data);
       }).error(function(err) {
        console.log(err);
       });
        }; 
      
      self.swipeLeft = function(id) {
         return self.showActions = true;
      } 
  }]);
})();