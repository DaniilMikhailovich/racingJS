const score = document.querySelector('.score'),
	start = document.querySelector('.start'),
	gameArea = document.querySelector('.gameArea'),
	car = document.createElement('div'),
	keys = {
		ArrowUp:false,
		ArrowDown:false,
		ArrowLeft:false,
		ArrowRight:false,
	},
	setting = {
		start:false,
		score:0,
		sreed:3,
	};

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
car.classList.add('car');

function startGame() {
	start.classList.add('hide');
	setting.start = true;
	gameArea.appendChild(car);
	requestAnimationFrame(playGame);
}

function startRun(event) {
	event.preventDefault();
	keys[event.key] = true;
}

function stopRun(event) {
	event.preventDefault();
	keys[event.key] = false;
}

function playGame(){
	console.log('Play game');
	setting.start && requestAnimationFrame(playGame);
}