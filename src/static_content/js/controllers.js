(function() {
  angular.module('starter.controller',[])
  .controller('messagesController',function(MailBox){
    var self = this;
    self.isred = false;
    self.getRequest = MailBox.allMesg();
    self.getRequest.success(function(data){
      /*console.log(data);*/
      self.messages = data;
    })
    .error(function(err){
      console.log('Error:' + err);
    });

    self.makeFaviorate = function(id,isStarRed,$event){
      $event.stopPropagation();
      MailBox.makeItfavoriate(id,!isStarRed)
      .success(
        function(){
          var currentMessage = self.messages.find(function(mesg){return mesg.id === id});
          currentMessage.isStarred = !isStarRed;

        }
      );
    };
    self.changeUrl = function(id,isRead) {
      if(isRead){
        self.isRead = !isRead;
      }
      else{
        self.isRead = isRead; 
      }
      MailBox.isRead(id,self.isRead)
      .success(
        function(){
          var currentMessage = self.messages.find(function(mesg){return mesg.id === id});
          currentMessage.isRead = isRead;

        }
      );
      window.location.href='/#/dashboard/message/'+id;
    };
  })

  .controller('singleMessageController',function($scope, $routeParams, MailBox){

    $scope.getSingleMsg = MailBox.singleMeg($routeParams.id);
    $scope.getSingleMsg.success(function(data){
      $scope.currentMessage = data; 
    }).error(function(err){
      console.log('Error: ' + err);
    });

    $scope.deletemsg = function(id,userId,$event) {
      $event.stopPropagation();
      var input = [];
      input.user = userId;
      $scope.deleteRequest = MailBox.deleteMsg(id,userId);
      $scope.deleteRequest
      .success(function() {
      window.location.href='/#/dashboard/message/';
      })
      .error(function(err) {
        console.log(err);
      }); 
    };
  });
})();
