/*
Dooku darth moff lando sidious ben jabba calamari grievous. Maul chewbacca organa zabrak c-3po darth. Skywalker yavin darth kenobi skywalker. Hutt yavin darth endor dagobah padmé kamino gamorrean. Antilles organa wedge darth ackbar leia. Hutt organa leia windu vader boba wicket mandalore. Moff fett obi-wan coruscant. Ventress obi-wan ponda mara padmé greedo antilles. Qui-gon boba bothan biggs hutt kenobi. Jango kamino amidala mon mustafar leia skywalker hutt. Ben darth mace calrissian luuke darth yavin.

Grievous mara amidala jinn jabba lars binks moff mara. Darth utapau solo jinn han. Skywalker darth jinn amidala jabba calamari windu ahsoka wedge. Mara jabba tatooine palpatine darth. Wampa wookiee solo darth c-3p0 amidala. Skywalker jade ackbar droid antilles amidala wicket moff. Ventress c-3po aayla mara grievous. Jar utapau organa darth skywalker. Jabba darth fisto darth. Vader anakin calamari darth dantooine moff. Greedo ackbar dooku ben obi-wan mandalore luuke. Fett greedo organa skywalker zabrak watto skywalker hutt mon.

Sebulba organa moff fett qui-gon utapau sebulba hutt. Wedge gamorrean baba ben leia gonk mara. Darth skywalker c-3p0 endor. Obi-wan sebulba greedo dooku calrissian. Yavin ben organa windu ackbar han secura. C-3po vader antilles solo antilles wampa yoda luke. Jade thrawn wampa grievous. Solo chewbacca mace moff mon mothma mara wicket tatooine. Skywalker hutt moff mustafar ventress. Calamari wampa jinn leia jabba ewok qui-gon. Hutt watto ben darth solo. Thrawn skywalker amidala vader darth ventress.

Tusken raider kit organa gonk moff darth ponda darth. Gonk skywalker amidala chewbacca. Binks mon kamino darth calrissian. Organa luke maul boba sebulba wookiee bothan. Skywalker darth binks twi'lek. Chewbacca alderaan dooku ackbar organa sebulba gonk amidala. Hutt qui-gonn moff antilles. Darth cade han gamorrean. Skywalker skywalker kessel calrissian mace jinn ventress mace amidala. Dantooine skywalker yavin sith tusken raider dagobah tatooine mothma. Sith solo skywalker biggs darth antilles maul.
*/


var lipsumText = {
	normal: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur laborum perferendis cum quaerat animi rerum voluptatem amet distinctio, quisquam illo modi voluptatibus dolorum vero earum obcaecati voluptatum quam tempore alias.',

	wars: 'Lucas ipsum dolor sit amet baba moff jade dagobah sidious jango darth skywalker utapau jabba. R2-d2 mandalore cade c-3p0 amidala. Alderaan skywalker darth mace skywalker gonk dantooine leia solo. Bothan ewok skywalker calamari ewok vader skywalker. Solo mon darth ponda. Zabrak coruscant hutt jabba endor solo obi-wan hutt. Mandalorians boba tatooine mon ben bothan mandalore hutt. Sebulba organa alderaan sidious palpatine sith. Luke han ackbar dantooine yavin qui-gon mon hutt. Moff jar jar moff.'
}
// *****************************************************************
// GENERATOR MODULE
// *****************************************************************
var Generator = (function() {
	
	// constructor
	var Generator = {};

	// private
	function getParams(name) {
		var theparams = decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
	}

	// public
	Generator.start = function() {
		
	}

	// return
	return Generator;

})();

// *****************************************************************
// FUNCTIONS
// *****************************************************************
function autoGrow(field) {
	if (field.scrollHeight > field.clientHeight) {
		field.style.height = field.scrollHeight + "px";
	}
}


// *****************************************************************
// INIT
// *****************************************************************
(function() {
	var textarea = document.querySelector('.lipsum-text');

	textarea.select();
	autoGrow(textarea);

	var myvar = getURLParameter('myvar');
	console.log(myvar);



})();

