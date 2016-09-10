

(function () {
  "use strict";

  angular.module("starter")
    .controller("ContactsController", ContactsController);

  ContactsController.$inject = ["ContactsService"];

  function ContactsController (ContactsService) {
    var vm = this;

    vm.contacts = [];

    activate();

    function activate () {
      ContactsService.getContacts().then(
        function (response) {
          vm.contacts = response;
        }
    )}
  }

}());
