
/**
 * First, declare $onChanges() inside child component
 */
let childComponent = {
  bindings : {
    user : '<'
  },
  controller : function() {
    this.$onChanges = function(changes) {
      // `changes` is an special object.
      // In this case, it contains a hash of a change Object
      if (changes.user) {
        this.user = angular.copy(changes.user.currentValue);

        // Or, beacuse changes from the parent are passed immediately to this.user
        this.user = angular.copy(this.user);
      }
    };
  },
  template : `
    <div>
      <input type="text" ng-model="$ctrl.user.name">
    </div>
  `
};

let parentComponent = {
  template: `
    <div>
      <a href="" ng-click="$ctrl.changeUser();">
        Change user (this will call $onChanges in child)
      </a>
      <child-component user="$ctrl.user"></child-component>
    </div>
  `,
  controller : function() {
    this.$onInit = function() {
      this.user = {
        name : 'Fiona',
        locations : 'USA'
      };
    };

    this.changeUser = function() {
      this.user = {
        name : 'Fiona',
        location : 'UK'
      };
    };
  }
};


angular
.module('app', [])
.component('childComponent', childComponent)
.component('parentComponent', parentComponent);
