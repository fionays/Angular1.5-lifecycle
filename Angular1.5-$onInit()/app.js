let tab = {
  bindings : {
    lable : '@' // pass the string to the current isolated scope
  },
  require : {
    tabs : '^^'
  },
  transclude : true,
  template : `
    <div class="tabs_content" ng-if="$ctrl.tab.selected">
      <div ng-transclude></div>
    </div>
  `,
  controller : function() {
    this.$onInit = function() {
      // create a tab
      this.tab = {
        lable : this.lable,
        selected : false
      };

      // Register itself, this.tabs === require:{tabs:'^^'}
      this.tabs.addTab(this.tab);
    };
  }
};

let tabs = {
  transclude : true,
  template : `
    <div class="tabs">
      <ul class="tabs_list">
        <li ng-repeat="tab in $ctrl.tabs">
          <a href=""
            ng-bind="tab.lable"
            ng-click="$ctrl.selectTab($index)">
            </a></li>
      </ul>

      <div class="tabs_content" ng-transclude></div>
    </div>
  `,
  controller : function() {
    this.$onInit = function() {
      this.tabs = [];
    };

    // Register each tag
    this.addTab = function addTab(tab) {
      this.tabs.push(tab);
    };

    // Select the current tab
    this.selectTab = function selectTab(index) {
      for (let i = 0; i < this.tabs.length; i ++) {
        this.tabs[i].selected = false;
      }

      this.tabs[index].selected = true;
    }

  }
};

angular
.module('app')
.component('tab', tab)
.component('tabs', tabs);
