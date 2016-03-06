// Initialise Smooth Scroll and Gumshoe for Navigation
gumshoe.init();
smoothScroll.init({
    speed: 560, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: -1, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
});

window.onload = function() {
  set_players(1);
  insert_player_feilds(1);
}

// Forms
var playerElements = document.querySelectorAll('#player-select>label');
var	players = document.querySelector('#players');
var teamMessage = document.querySelector('#team-message');

var	contactForm = document.querySelector('#contact-form');

// FUNCTIONS
// Events
function handle_click(event) {
	playerNum = event.currentTarget.getAttribute("id");
	console.log(playerNum + " players selected");
	set_players(playerNum);
	insert_player_feilds(playerNum);
	message(playerNum);
	document.querySelector('#team-submit').removeAttribute('disabled');
}
// Handle team submissions (adapted from cloudstitch 'Magic Forms' examples)
function handle_entry(event) {
	event.stopPropagation();
	event.preventDefault();
	var entryForm = document.getElementById("entry-form");
	var xhr = new XMLHttpRequest();
	xhr.open(entryForm.getAttribute('method'), entryForm.getAttribute('action'));
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('X-CSRF-Token', document.querySelector("meta[name='csrf-token']").getAttribute("content"));

	xhr.onload = function() {
		console.log("Form Sent:");
		console.log("Response Code: " + xhr.status + "\nResponse Text: " + xhr.responseText);
		entryForm.insertAdjacentHTML('beforebegin', '<div id="entry-confirmation">Thanks! A human will get back to you with a confirmation once that is processed.</div>');
		entryForm.setAttribute('style', 'display: none');
	};
	
	var inputs = entryForm.getElementsByTagName('input');
	var pairs = [];
	
	for (var i = 0; i < inputs.length; i++) {
		pairs.push(encodeURI(inputs[i].getAttribute('name')) + '=' + encodeURI(inputs[i].value));
	}
	
	xhr.send(pairs.join('&'));
}

function handle_contact(event){
	event.stopPropagation();
	event.preventDefault();

	// Only jquery dep
	$.ajax({
    	// url: "//formspree.io/mattfannin@acidic.co.nz",
    	url: "//formspree.io/joshua.scott.132@gmail.com",
    	method: "POST",
    	data: $('#contact-form').serialize(),
    	dataType: "json"
	});

	document.querySelector('#contact').insertAdjacentHTML('beforeend', '<div id="contact-message"><div>Thanks! A human will get back to you shortly.</div></div>')
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
  for(var i = 1; i <= 5; i++) {
    var selector = "#player-emails > input:nth-child(" + i + ")";
    var el = document.querySelector(selector);
    
    if(i <= playerCount) {
      if(el) continue;
      var newEl = document.createElement("input");
      newEl.type = "text";
      newEl.name = "player_" + i + "_email";
      newEl.placeholder = "Player " + i + " email";
      document.getElementById("player-emails").appendChild(newEl);
    } else if(el) {
      document.getElementById("player-emails").removeChild(el);
    }
  }
}

function message(playerCount){
	var message = "";
	switch (playerCount) {
		case '1':
			message = "<div>Lone Wolf.</div>";
			break;
		case '2':
			message = "<div>Dynamic Duo.</div>";
			break;
		case '3':
			message = "<div>Musketeers.</div>";
			break;
		case '4':
			message = "<div>Camping!</div>";
			break;
		case '5':
			message = "<div>Perfect Prime.</div>";
			break;
	}
	teamMessage.innerHTML = message;
}
// END FUNCTIONS

// LISTENERS
Array.prototype.forEach.call(playerElements, function(element) {
	element.addEventListener("click", handle_click);
})

document.querySelector('#entry-form').addEventListener('submit', handle_entry);
document.querySelector('#contact-form').addEventListener('submit', handle_contact);

// END LISTENERS



// Logs
console.log('Forms');
console.log('-------------------------------------------------');
console.log('Players Object:');
console.log(playerElements);
console.log('-------------------------------------------------');