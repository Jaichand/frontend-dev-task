(function() {
  angular.module('starter.controller',[])
  .controller('messagesController',function(MailBox){
    var self = this;
    self.isred = false;
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
    self.makeFaviorate = function(id,isStarRed,$event){
      $event.stopPropagation();
     /* MailBox.makeItfavoriate(id,isStarRed);*/
    }
    self.changeUrl = function(id,$event) {
      console.log(id);
      window.location.href='/#/dashboard/message/'+id;
    };
  })

  .controller('singleMessageController',function($scope, $routeParams, MailBox){
    /*$event.stopPropagation();*/
    // console.log($routeParams);
    $scope.getSingleMsg = MailBox.singleMeg($routeParams.id);
    $scope.getSingleMsg.success(function(data){
      $scope.currentMessage = data; 
    }).error(function(err){
      console.log('Error: ' + err);
    });    
  });
})();
