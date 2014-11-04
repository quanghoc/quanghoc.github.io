angular.module('vipr.directives', [])

.directive('pageInfo', [function() {
	return {
		restrict: 'EA',
		scope: {totalItems: '=totalItems', model: '=ngModel'},
		link: function(scope, element, attrs) {
			
			scope.$watch("model", function(newVal, oldVal) {
				var rpp = 10,
						start = (scope.model - 1) * rpp + 1,
						end = scope.model * rpp > scope.totalItems ? scope.totalItems : scope.model * rpp,
						divText = "Showing " + start + " to " + end + " of " + scope.totalItems + " entries";
				element.html(divText);
			});

		}
	};
}])

.directive('youtubeEmbed', [function() {
	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			element.html(
				"<object width=\"640\" height=\"360\">"+
					"<param name=\"allowFullScreen\" value=\"true\">"+
					"</param>"+
					"<param name=\"allowscriptaccess\" value=\"always\">"+
					"</param>"+
					"<embed src=\"//www.youtube.com/v/" + scope.useCaseId + "?version=3&amp;hl=en_US&amp;rel=0\" type=\"application/x-shockwave-flash\" width=\"640\" height=\"360\" allowscriptaccess=\"always\" allowfullscreen=\"true\"></embed>"+
				"</object>"
			);
		}
	};
}])

.directive('brightcoveEmbed', ['$timeout', function($timeout) {
	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {

			var bcExp, modVP, modExp;
			var BCL = {};



			// var APIModules = brightcove.modules.APIModules;
			// var experience = brightcove.modules.ExperienceModule;
			// var videoPlayer = experience.getModule(APIModules.VIDEO_PLAYER);

			element.html(
				"<object id=\"myExperience3749236557001\" class=\"BrightcoveExperience " + (scope.startDelay ? "invisible" : "") + " \">"+
				  "<param name=\"bgcolor\" value=\"#FFFFFF\" />"+
				  "<param name=\"width\" value=\"640\" />"+
				  "<param name=\"height\" value=\"360\" />"+
				  "<param name=\"playerID\" value=\"3785573236001\" />"+
				  "<param name=\"playerKey\" value=\"AQ~~,AAAAoc2nJVE~,yIQzUe15OpLNNILLBR8TqogKNgewDpLy\" />"+
				  "<param name=\"isVid\" value=\"true\" />"+
				  "<param name=\"isUI\" value=\"true\" />"+
				  "<param name=\"dynamicStreaming\" value=\"true\" />"+
				  "<param name=\"@videoPlayer\" value=\"" + scope.useCaseId + "\" />"+
				  "<param name=\"includeAPI\" value=\"true\" />"+
				  "<param name=\"templateLoadHandler\" value=\"onTemplateLoaded\" />"+
				  // "<param name=\"templateReadyHandler\" value=\"BCL.onTemplateReady\" />"+
				"</object>"
			);
			brightcove.createExperiences();
			
			function onTemplateLoaded (experienceID) {
				console.log('called onTemplateLoad');
	      try {
          bcExp = brightcove.getExperience(experienceID);
          // modVP = bcExp.getModule(APIModules.VIDEO_PLAYER);
          // modExp = bcExp.getModule(APIModules.EXPERIENCE);
          // modVP.addEventListener('mediaProgress', checkVidProgress );
	      } catch(err) {}
			}

			BCL.onTemplateReady = function (evt) {
				console.log('called onTemplateReady');
				modVP = bcExp.getModule(APIModules.VIDEO_PLAYER);
				modExp = bcExp.getModule(APIModules.EXPERIENCE);
			}

			function checkVidProgress() {

			}

			console.log(brightcove);
			
			// $timeout(function() {
			// 	onTemplateLoaded('myExperience3749236557001');
			// }, 1000);

			$timeout(function() {
				// videoPlayer.pause();
				modVP.pause();
			}, 10000);

			if (scope.startDelay) {
				console.log('scope.startDelay');
				$timeout(function() {
					jQuery('#myExperience3749236557001').removeClass('invisible');
				}, scope.startDelay);
			}
		}
	};
}])

.directive('progressDots', ['$interval', function($interval) {
	function link(scope, element, attrs) {
		var timeoutId;

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});
		
		var dots = "";
		for(var i=0; i<attrs.num; i++){
			dots += ' <span class="dot dot-info hide"></span>';
		}
		
		element.html(
		'<div class="progressBar">'+
		' <span class="label label-success">'+ attrs.num +'</span>'+ dots +
		'</div>'
		);
		
		var currentDot = 0;
		
		function updateDot(dnum){
			var dot = element.find(".dot:eq("+ dnum +")");
			jQuery(dot).addClass("dot-active");
			jQuery(dot).removeClass("hide");
			//console.log("-- updating dot #"+dnum);
		}
		
		function clearDot(dnum){
			var dot = element.find(".dot:eq("+ dnum +")");
			jQuery(dot).removeClass("dot-active").removeClass("dot-info").addClass("dot-success");
			//console.log("-- clearing dot #"+dnum);
			currentDot++;
			updateDot(currentDot);
		}
		
		if(attrs.num > 0){
			updateDot(currentDot);
		}

		// start the UI update process; save the timeoutId for canceling
		timeoutId = $interval(function() {
			if(currentDot==attrs.num){
				$interval.cancel(timeoutId);
				//console.log("--- timeout killed");
			} else {
				clearDot(currentDot);
			}
		}, attrs.sec * 1000);
	}

	return {
		restrict: 'EA',
		link: link
	};
}])

.directive( 'guideButton', function() {
		return {
				restrict: 'E',
				scope: {
						isDisabled: '='
				},
				template: '<button class="btn btn-info navbar-btn" ng-disabled="isDisabled">Behind the Scenes</button>'
		};
})

// Directive to validate matching passwords
.directive('passwordMatch', [function () {
	return {
		restrict: 'A',
		scope:true,
		require: 'ngModel',
		link: function (scope, elem , attrs,control) {
			var checker = function () {
 
				//get the value of the first password
				var e1 = scope.$eval(attrs.ngModel); 
 
				//get the value of the other password  
				var e2 = scope.$eval(attrs.passwordMatch);
				return e1 == e2;
			};
			scope.$watch(checker, function (n) {
 
				//set the form control to valid if both 
				//passwords are the same, else invalid
				control.$setValidity("unique", n);
			});
		}
	};
}])

.directive('setModel', [function() {
	return {
		restrict: 'EA',
		scope: {model : '=setModel'},
		link: function(scope, element, attrs) {
			scope.model = element.html();
		}
	};
}])

.directive('eatClick', function() {
	return function(scope, element, attrs) {
		jQuery(element).click(function(event) {
			event.preventDefault();
		});
	};
})

.directive('preventDefault', function() {
	return {
		restrict: 'ECMA',
		link: function(scope, elem, attrs) {
				elem.on('click', function(e) {
					e.preventDefault();
				});
		}
	};
});