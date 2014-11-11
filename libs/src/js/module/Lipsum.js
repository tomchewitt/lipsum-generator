// *****************************************************************
// GENERATOR MODULE
// *****************************************************************
var Lipsum = (function() {
	
	// constructor
	var Lipsum = {};

	// private
	var defaultText = {
		normal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		hodor: 'Hodor hodor hodor, hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor. Hodor hodor hodor, hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor. Hodor hodor hodor, hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor. Hodor hodor hodor, hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor. Hodor hodor hodor, hodor hodor hodor hodor hodor hodor hodor hodor hodor hodor.'
	}

	var params = [
		{ name: 'paras', val: '1' },
		{ name: 'words', val: '69' },
		{ name: 'tags', val: '0' },
		{ name: 'hodor', val: '0' }
	];

	function generate() {
		var $textarea = document.querySelector('.lipsum-text');
		var newTextWords = '';
		var newText = '';
		var textArr;
		var i;
		var j;

		// setup text mode
		if (params[3].val == 0) {
			textArr = defaultText['normal'].split(' ');
		} else {
			textArr = defaultText['hodor'].split(' ');
		}

		// setup new text words
		for (i = 0; i < parseInt(params[1].val); i++) {
			if (i < 69) {
				newTextWords += textArr[i] + ' ';
			} else {
				if (i % 69 === 0) {
					j = 0;
				}
				
				newTextWords += textArr[j] + ' ';
				j++;
			}
			
		}

		// setup new text paras
		if (params[2].val == 0) {

			// no tags
			for (var i = 1; i <= parseInt(params[0].val); i++) {
				newText += newTextWords;

				// remove space from final character
				if (newText.substr(newText.length - 1) == ' ') {
					newText = newText.replace(/\s*$/, '');
				}
				// add full stop if required
				if (!(newText.substr(newText.length - 1) == '.')) {
					newText += '.';
				}

				if (!(parseInt(params[0].val) == i)) {
					 newText += '&#10;&#10;';
				}
			}
		} else {

			// with tags
			for (var i = 1; i <= parseInt(params[0].val); i++) {
				newText += '<p>' + newTextWords;

				// remove space from final character
				if (newText.substr(newText.length - 1) == ' ') {
					newText = newText.replace(/\s*$/, '');
				}
				// add full stop if required
				if (!(newText.substr(newText.length - 1) == '.')) {
					newText += '.';
				}

				newText += '</p>';

				if (!(parseInt(params[0].val) == i)) {
					 newText += '&#10;&#10;';
				}
			}
		}



		// setup the new url for bookmarking
		setUrlParams();

		// finish by setting, stretching $textarea
		$textarea.innerHTML = (newText);
		$textarea.style.height = 0;
		$textarea.style.height = $textarea.scrollHeight + "px";	
	}


	// SET THE URL PARAMS FOR BOOKMARKING
	function setUrlParams() {
		var stateObject = {};
		var title = 'Lipsum Generator | An @tomchewitt Experiment';
		var newUrl = '?paras=' + params[0].val + '&words=' + params[1].val;

		// add to newUrl
		if (params[2].val == '1') {
			newUrl += '&tags=1';
		}
		if (params[3].val == '1') {
			newUrl += '&hodor=1';
		}

		history.pushState(stateObject,title,newUrl);
	}


	// UPDATE USER DATA & META
	function updateUI() {
		var $paras = document.querySelector('.paras-input');
		var $words = document.querySelector('.words-input');
		var $tags = document.querySelector('.tags-input');
		var $hodor = document.querySelector('.hodor-input');
		
		// update paras
		$paras.value = params[0].val;

		// update words
		$words.value = params[1].val;

		// update tags
		if (params[2].val == 0) {
			$tags.checked = false;
		} else {
			$tags.checked = true;
		}

		// update hodor
		if (params[3].val == 0) {
			$hodor.checked = false;
		} else {
			$hodor.checked = true;
		}

		// update meta
		document.querySelector('.meta-input').value = params[0].val * params[1].val;

		// output lipsum text
		generate();
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

		updateUI();
		document.querySelector('.lipsum-text').select();
	})();


	// FUNCTION CALLED ON GENY INTERACTION
	Lipsum.update = function(param, value) {

		// update params to new value
		for (var i = 0; i < params.length; i++) {
			if (params[i].name == param) {
				params[i].val = value;
				break;
			}
		}

		updateUI();
	}


	// RETURN MODULE
	return Lipsum;

})();
