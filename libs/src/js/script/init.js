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

	// hodor
	document.querySelector('.hodor-input').addEventListener('change', function() {

		var newvalue;

		if (this.checked) {
			newvalue = '1';
		} else {
			newvalue = '0';
		}

		Lipsum.update('hodor', newvalue);
	});

	// TEXT SELECT
	document.querySelector('.lipsum-text').addEventListener('click', function() {
		this.select();
	});

})();

