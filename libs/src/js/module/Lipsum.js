// *****************************************************************
// GENERATOR MODULE
// *****************************************************************
var Lipsum = (function() {
	
	// constructor
	var Lipsum = {};

	// private
	var defaultText = {
		normal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

		wars: 'Lucas...'
	}

	var params = [
		{ name: 'paras', val: '1' },
		{ name: 'words', val: '69' },
		{ name: 'tags', val: '0' },
		{ name: 'wars', val: '0' }
	];

	function generate() {
		var textarea = document.querySelector('.lipsum-text');
		var textArr = defaultText['normal'].split(' ');
		var newTextWords = '';
		var newTextParas = '';

		// setup new text words
		for (var i = 0; i < parseInt(params[1].val); i++) {
			newTextWords += textArr[i] + ' ';
		}

		// setup new text paras
		for (var i = 0; i < parseInt(params[0].val); i++) {
			newTextParas += newTextWords;

			if (!i == (parseInt(params[0].val)-1)) {
				 newTextParas += '&#10;&#10;';
			}
		}

		// setup the new url for bookmarking
		setUrlParams();

		// finish by setting, stretching textarea & selecting it
		textarea.innerHTML = (newTextParas);
		textarea.style.height = textarea.scrollHeight + "px";
		textarea.select();




		/*********/
		// TO DO
		// update meta info....
		/*********/
	}


	// SET THE URL PARAMS FOR BOOKMARKING
	function setUrlParams() {
		
	}


	// ON INIT GET URL PARAMS AND UPDATE VAR
	(function getUrlParams() {
		for (var i = 0; i < params.length; i++) {
			var newparam = decodeURIComponent((new RegExp('[?|&]' + params[i].name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||params[i].val;

			if (newparam.substring(newparam.length-1) == '/') {
				newparam = newparam.slice(0,-1);
			 }
			 params[i].val = newparam;
		}
		console.log(params);

		// update values for user
		//...

		// generate text
		generate();
	})();


	// FUNCTION CALLED ON GENY INTERACTION
	Lipsum.update = function(param, value) {
		for (var i = 0; i < params.length; i++) {
			if (params[i].name == param) {
				params[i].val = value;
				break;
			}
		}
		// update values for user
		//...

		// generate text
		generate();
	}


	// return
	return Lipsum;

})();
