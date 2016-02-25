// Initialise Smooth Scroll and Gumshoe for Navigation
gumshoe.init();
smoothScroll.init({
    speed: 560, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: -1, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
});

// Forms
var playerElements = document.querySelectorAll('#player-select>label');
var	players = document.querySelector('#players');

// FUNCTIONS
// Events
function handle_click(event) {
	playerNum = event.currentTarget.getAttribute("id");
	console.log(playerNum + " players selected");
	set_players(playerNum);
	insert_player_feilds(playerNum);
}
// DOM Manipulation
function set_players(playerCount) {
	var count = playerCount;
	Array.prototype.forEach.call(playerElements, function(element) {
		element.setAttribute('class', '');
		if (count > 0) {
			element.setAttribute('class', 'set');
		}
		count -= 1;
	})
}
function insert_player_feilds(playerCount){
	var	count = playerCount;
	players.innerHTML = "";
	do {
		players.insertAdjacentHTML('afterbegin', '<input type="text" placeholder="Name (Player ' + count + ')">');
		count -= 1; 
	} while (count > 0);
}
// END FUNCTIONS

// LISTENERS
Array.prototype.forEach.call(playerElements, function(element) {
	element.addEventListener("click", handle_click);
})
// END LISTENERS

// Logs
console.log('Forms');
console.log('-------------------------------------------------');
console.log('Players Object:');
console.log(playerElements);
console.log('-------------------------------------------------');