(function() {
  'use strict';

  angular
    .module('starter')
    .controller('ReportingController', ReportingController);

  // ReportingController.$inject = ['dependencies'];

  /* @ngInject */
  function ReportingController($log, $mdDialog) {
    console.log('what?');
    $log.log('this is the reoprting controller!');
    var vm = this;
    Chart.defaults.global.responsive = true;
    vm.labels = ["January", "February", "March"];
    vm.series = ['Personal Sales', 'Downline Sales'];
    vm.membershipLevels = [{
      name: 'Distributor',
      levelRequirement: '1-10',
      placeholder: '1'
    },{
      name: 'Bronze',
      levelRequirement: '11-30',
      placeholder: '10'
    },{
      name: 'Silver',
      minLevel: '31',
      levelRequirement: '31-131',
      placeholder: '31'
    },{
      name: 'Gold',
      levelRequirement: '131+',
      placeholder: '131+'
    },{
      name: 'Premier',
      levelRequirement: '2 G',
      placeholder: '2 G'
    },{
      name: 'Distributor Manager',
      levelRequirement: '6 G',
      placeholder: '6 G'
    }];

    //Temp hard-coded graph data
    vm.levelProgressDemo = {
      level: 42,
      nextLevel: 131,
      pointsToNextLevel: 89
    };

    vm.data = [
      [10, 10, 20],
      [5, 25, 30]
    ];

    //Show Dialog
    vm.showProgressInfoDialog = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show({
        controller: ProgressDialogController,
        controllerAs: 'dialog',
        templateUrl: 'components/reporting/dialog/levels.dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true
      });
    };

    activate();

    function activate() {

    }

    function ProgressDialogController($mdDialog) {
      vm = this;
      vm.hide = function() {
        $mdDialog.hide();
      };
      vm.cancel = function() {
        $mdDialog.cancel();
      };
      vm.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      vm.membershipLevels = [{
        name: 'Distributor',
        levelRequirement: '1-10',
        placeholder: '1'
      },{
        name: 'Bronze',
        levelRequirement: '11-30',
        placeholder: '10'
      },{
        name: 'Silver',
        minLevel: '31',
        levelRequirement: '31-131',
        placeholder: '31'
      },{
        name: 'Gold',
        levelRequirement: '131+',
        placeholder: '131+'
      },{
        name: 'Premier',
        levelRequirement: '2 G',
        placeholder: '2 G'
      },{
        name: 'Distributor Manager',
        levelRequirement: '6 G',
        placeholder: '6 G'
      }];

    }
  }
})();
