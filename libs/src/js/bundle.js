// *****************************************************************
// GENERATOR MODULE
// *****************************************************************
var Lipsum = (function() {
	
	// constructor
	var Lipsum = {};

	// private
	var defaultText = {
		normal: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

		wars: 'Lucas...'

		//****************************/
		// TO DO
		// make lucas text
		//****************************/
	}

	var params = [
		{ name: 'paras', val: '1' },
		{ name: 'words', val: '69' },
		{ name: 'tags', val: '0' },
		{ name: 'wars', val: '0' }
	];

	function generate() {
		var $textarea = document.querySelector('.lipsum-text');
		var newTextWords = '';
		var newTextParas = '';
		var textArr;
		var i;
		var j;

		// setup text mode
		if (params[3].val == 0) {
			textArr = defaultText['normal'].split(' ');
		} else {
			textArr = defaultText['wars'].split(' ');
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
				newTextParas += newTextWords;

				if (!(parseInt(params[0].val) == i)) {
					 newTextParas += '&#10;&#10;';
				}
			}
		} else {

			// with tags
			for (var i = 1; i <= parseInt(params[0].val); i++) {
				newTextParas += '<p>' + newTextWords + '</p>';

				if (!(parseInt(params[0].val) == i)) {
					 newTextParas += '&#10;&#10;';
				}
			}
		}

		//****************************/
		// TO DO
		// add full stop to final word...
		//****************************/ 

		// setup the new url for bookmarking
		setUrlParams();

		// finish by setting, stretching $textarea
		$textarea.innerHTML = (newTextParas);
		$textarea.style.height = 0;
		$textarea.style.height = $textarea.scrollHeight + "px";	
	}


	// SET THE URL PARAMS FOR BOOKMARKING
	function setUrlParams() {
		//****************************/
		// TO DO
		// bookmarking url
		//****************************/
	}


	// UPDATE USER DATA & META
	function updateUI() {
		var $paras = document.querySelector('.paras-input');
		var $words = document.querySelector('.words-input');
		var $tags = document.querySelector('.tags-input');
		var $wars = document.querySelector('.wars-input');
		
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

		// update wars
		if (params[3].val == 0) {
			$wars.checked = false;
		} else {
			$wars.checked = true;
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

// *****************************************************************
// INIT
// *****************************************************************
(function() {
	// PARAS
	// more
	document.querySelector('.paras .arrow.more').addEventListener('click', function() {
		var curvalue = parseInt(document.querySelector('.paras-input').value);
		var newvalue = (curvalue + 1).toString();

		Lipsum.update('paras', newvalue);
	});
	// less
	document.querySelector('.paras .arrow.less').addEventListener('click', function() {
		var curvalue = parseInt(document.querySelector('.paras-input').value);
		var newvalue = (curvalue - 1).toString();

		if (parseInt(newvalue) < 1) {
 			newvalue = '1';
	 	}		

		Lipsum.update('paras', newvalue);
	});
	// keyup
	document.querySelector('.paras-input').addEventListener('keyup', function() {
		Lipsum.update('paras', this.value);
	});

	// WORDS
	// more
	document.querySelector('.words .arrow.more').addEventListener('click', function() {
		var curvalue = parseInt(document.querySelector('.words-input').value);
		var newvalue = (curvalue + 1).toString();

		Lipsum.update('words', newvalue);
	});
	// less
	document.querySelector('.words .arrow.less').addEventListener('click', function() {
		var curvalue = parseInt(document.querySelector('.words-input').value);
		var newvalue = (curvalue - 1).toString();

		if (parseInt(newvalue) < 1) {
 			newvalue = '1';
	 	}		

		Lipsum.update('words', newvalue);
	});
	// keyup
	document.querySelector('.words-input').addEventListener('keyup', function() {
		Lipsum.update('words', this.value);
	});

	// TAGS
	document.querySelector('.tags-input').addEventListener('change', function() {

		var newvalue;

		if (this.checked) {
			newvalue = '1';
		} else {
			newvalue = '0';
		}

		Lipsum.update('tags', newvalue);
	});

	// WARS
	document.querySelector('.wars-input').addEventListener('change', function() {

		var newvalue;

		if (this.checked) {
			newvalue = '1';
		} else {
			newvalue = '0';
		}

		Lipsum.update('wars', newvalue);
	});

	// TEXT SELECT
	document.querySelector('.lipsum-text').addEventListener('click', function() {
		this.select();
	});

})();

