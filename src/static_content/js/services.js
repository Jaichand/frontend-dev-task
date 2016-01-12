angular.module('starter.service',[])
.factory('MailBox',function($http) {
    var mailbox = {};

    return {
      allMesg:function() {
        return $http.get('/api/');
      },
      singleMeg:function(id) {
       return $http.get('/api/'+ id);
      },
      deleteMsg:function(id,userId){
        return $http.delete('/api/'+ id,{params:{id:userId}});
      },
      isRead: function(id,isRead){
        return $http.patch('/api/'+id, {"isRead":isRead});
      },
      makeItfavoriate: function(id,isStarRed){
        return $http.patch('/api/'+id, {"isStarred":isStarRed});
      }
    }
});