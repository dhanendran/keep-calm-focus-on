const sounds = {
	'rain': new Audio( './assets/sounds/rain.mp3' ),
	'river': new Audio( './assets/sounds/river.mp3'),
	'thunder': new Audio( './assets/sounds/thunder.mp3'),
	'campfire': new Audio( './assets/sounds/campfire.mp3'),
	'lakewaves': new Audio( './assets/sounds/lake-waves.mp3'),
	'waterfall': new Audio( './assets/sounds/waterfall.mp3')
};

function playPause( sound ) {

	if ( sounds[ sound ].paused ) {
		sounds[ sound ].play();
		sounds[ sound ].loop = true;

		if ( 0 === sounds[ sound ].volume ) {
			sounds[ sound ].volume = 1;
			document.getElementById( sound + 'Volume' ).value = 100;
		}

	} else {
		sounds[ sound ].pause();
	}

	document.getElementById( sound + 'PlayPause' ).classList.toggle('active');
}

function adjustVolume( sound, volume ) {
	let v = volume / 100;
	sounds[ sound ].volume = v;

	if ( 0 === v ) {
		sounds[ sound ].pause();
		document.getElementById( sound + 'PlayPause' ).classList.remove('active');
	}
}
