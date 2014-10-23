// *****************************************************************
// GENERATOR MODULE
// *****************************************************************
var Lipsum = (function() {
	
	// constructor
	var Lipsum = {};

	// private
	var lipsumText = {
		normal: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laborum perferendis cum quaerat animi rerum voluptatem amet distinctio, quisquam illo modi voluptatibus dolorum vero earum obcaecati voluptatum quam tempore alias.',

		wars: 'Lucas ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laborum perferendis cum quaerat animi rerum voluptatem amet distinctio, quisquam illo modi voluptatibus dolorum vero earum obcaecati voluptatum quam tempore alias.'
	}

	var params = [
		{ name: 'paras', val: '1' },
		{ name: 'words', val: '69' },
		{ name: 'tags', val: false },
		{ name: 'wars', val: false }
	];

	function generate() {
		// get vars
	}

	function fitText(elm) {
		elm.style.height = elm.scrollHeight + "px";
		elm.select();
	}

	// public
	Lipsum.update = function(param, value) {

	}

	Lipsum.getUrlParams = function() {
		for (var i = 0; i < params.length; i++) {
			var newparam = decodeURIComponent((new RegExp('[?|&]' + params[i].name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||params[i].val;

			if (!your_string.indexOf('/')) {
				newparam.slice(0,-1);
			 }

			 params[i].val = newparam;
		}

		console.log(params);
		
	}

	Lipsum.setUrlParams = function() {
		
	}


	// return
	return Lipsum;

})();
