(function() {
  angular.module('starter.controller',[])
  .controller('messagesController',function(MailBox){
    var self = this;
    self.getRequest = MailBox.allMesg();
    self.getRequest.success(function(data){
      console.log(data);
      self.messages = data;
    })
    .error(function(err){
      console.log('Error:' + err);
    });

    self.deletemsg = function(id,userId,$event) {
        $event.stopPropagation();
        var input = [];
        input.user = userId;
        self.deleteRequest = MailBox.deleteMsg(id,userId);
        /*$http.delete('/api/'+ id,{params:{id:userId}})*/
        self.deleteRequest
        .success(function() {
          self.messages = self.messages.filter(function(mesg){
            return mesg.id !== id;
          });
        })
        .error(function(err) {
          console.log(err);
        });
      };
  })
  .controller('singleMessageController',function($scope, $routeParams, MailBox){
    $scope.getSingleMsg = MailBox.singleMeg($routeParams.id);
    $scope.getSingleMsg.success(function(data){
      $scope.currentMessage = data;
    }).error(function(err){
      console.log('Error: ' + err);
    });    
  });
})();
