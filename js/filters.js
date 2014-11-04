angular.module('vipr.filters', [])

.filter('slice', function() {
	return function(arr, start, end) {
		return (arr || []).slice(start, end);
	};
})
.filter('dateFilter',['$filter', function($filter) {
	var suffixes = ["th", "st", "nd", "rd"];
	return function(input) {
		var dtfilter = $filter('date')(input, 'MMM d');
		var day = parseInt(dtfilter.slice(-1));
		var relevantDigits = (day < 30) ? day % 20 : day % 30;
		var ordinal = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
		var suffix = $filter('date')(input, 'yyyy h:mm:ss a');
		return dtfilter+ordinal+' '+suffix;
	};
}])
.filter('aggregate', function() {
	return function(input) {
		if (input instanceof Array) {
			var aggregate = '';
			var inList = [];
			input.forEach(function (inputVal, i) {
				if (!_.contains(inList, inputVal)) {
					inList.push(inputVal);
					if (i != 0) {
						aggregate += ', '
					}
					aggregate += inputVal;
				}
			});
		}else{
			var aggregate = input;
		}

		return aggregate;
	};
})
.filter('readJSON', function() {
	return function(input) {
		if (input instanceof Object) {
			var keys = '';
			var i = 0;
			_.each(input, function (val, key) {
				if (val) {
					if (i != 0) {
						keys += ', '
					}
					keys += key;
				}
				i++;
			});
		}else{
			var keys = input;
		}
		return keys;
	};
});