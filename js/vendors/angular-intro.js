var ngIntroDirective = angular.module('angular-intro', []);

ngIntroDirective.directive('ngIntroOptions', ['$timeout', '$rootScope', function ($timeout, $rootScope) {

	return {
		restrict: 'A',
		scope: {
			ngIntroMethod: "=",
			ngIntroOptions: '=',
			// ngIntroExitTrigger: '=',
			ngIntroOncomplete: '=',
			ngIntroOnexit: '=',
			ngIntroOnchange: '=',
			ngIntroOnbeforechange: '=',
			ngIntroOnafterchange: '=',
			ngIntroReset: '=',
			ngIntroCurrentstep: '=',
			ngIntroAutostart: '&'
		},
		link: function(scope, element, attrs) {
			scope.ngIntroMethod = function(step) {

				var intro;

				if (typeof(step) === 'string') {
					intro = introJs(step);

				} else {
					intro = introJs();
				}

				intro.setOptions(scope.ngIntroOptions);

				// This is a hack - Modify later
				$rootScope.$on('ExitTour', function(){
					intro.exit();
				});

				if (scope.ngIntroOncomplete) {
					intro.oncomplete(function() {
						$timeout(scope.ngIntroOncomplete.bind(this, scope));
					});
				}

				if (scope.ngIntroOnexit) {
					intro.onexit(function() {
						$timeout(scope.ngIntroOnexit.bind(this, scope));
						scope.ngIntroCurrentstep = intro.getCurrentStep();
					});

				}

				if (scope.ngIntroOnchange) {
					intro.onchange(function(targetElement){
					   $timeout(scope.ngIntroOnchange.bind(this, targetElement, scope));
					});
				}

				if (scope.ngIntroOnbeforechange) {
					intro.onbeforechange(function(targetElement) {
						$timeout(scope.ngIntroOnbeforechange.bind(this, targetElement, scope));
					});
				}

				if (scope.ngIntroOnafterchange) {
					intro.onafterchange(function(targetElement){
						$timeout(scope.ngIntroOnafterchange.bind(this, targetElement, scope));
					});
				}

				if (typeof(step) === 'number') {
					intro.goToStep(step).start();
				} else {
					intro.start();
				}
			};

			if (scope.ngIntroAutostart()) {
				$timeout(function() {
					scope.ngIntroMethod();
				});
			};
		}
	};
}]);
