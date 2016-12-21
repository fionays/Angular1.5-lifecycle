function myDirective () {
  restrict : 'E',
  scope : {
    foo : '='
  },
  bindToController : true,
  compile: function compile ($element, $attrs) {

    return {
      pre: function preLink($scope, $element, $attrs) {
        // access to the child elements that are NOT linked to the directive
      },
      post: function postLink($scope, $element, $attrs) {
        // access to the child elements that are compiled and linked
      }
    };
  }
}


/**
 * Though you may know it more by this
 */
 function myDirective() {
   restrict : 'E',
   scope : {
     foo : '='
   },
   link: function postLink ($scope, $element, $attrs)
 }
