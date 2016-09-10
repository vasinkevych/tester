(function () {
  "use strict"

  angular.module("starter")
    .service("ContactsService", ContactsService);

  ContactsService.$inject = [ '$cordovaContacts', '$ionicPlatform'];

  function ContactsService ( $cordovaContacts, $ionicPlatform) {
    this.getContacts = getContacts;

    function _successCallback (result) {
      return result
    }
    function _errorCallback (error) {
      return error
    }

    function getContacts () {
     return $cordovaContacts.find().then( _successCallback, _errorCallback);
    }
  }

} ());
