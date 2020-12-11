class game {
	constructor() {
		this.canvas = null;
		this.context = null;
		this.colors = [
			'#00aefd',
			'#ffa400',
			'#07a787',
			'#ff7870',
			'black',
			'pink',
			'yellow',
			'#e74c3c',
			'#2979ff',
			'#FF0000',
			'#FF3366'

		];
		this.timeOut = null;
		this.init();
		this.tocDo = 200;
		// this.openStart = false; 

	}
	//khai bao canvas
	init() {
		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = 1000;
		this.canvas.height = 500;
		document.body.appendChild(this.canvas);
		this.snake = new snake(this);
		this.food = new food(this);
		this.shadowColor();
		this.startGame();
		this.stopGame();

	}

	//mau vien nhay lien tuc
	shadowColor() {
		setInterval(() => {
			const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
			// console.log(randomColor);
			document.querySelector('canvas').style.boxShadow = ' 0px  0px  40px  20px' + randomColor;
		}, 1000);
	}

	//cho game chay 
	loop() {
		this.update();
		this.draw();
		this.timeOut = setTimeout(() => this.loop(), this.tocDo);
		// console.log(this.tocDo);
		this.doKho();
	}
	// do kho cua game
	doKho() {

		this.ktDoKho = this.snake.maxCells;
		switch (this.ktDoKho) {
			case 5: this.tocDo = 150;
				// console.log(davao)
				break;
			case 10: this.tocDo = 100;
				// console.log(davao)
				break;
			case 15: this.tocDo = 60;
				// console.log(davao)
				break;
			case 20: this.tocDo = 40;
				// console.log(davao)
				break;
			case 25: this.tocDo = 30;
				// console.log(davao)
				break;
			case 30: this.tocDo = 20;
				// console.log(davao)
				break;
			case 35: this.tocDo = 10;
				// console.log(davao)
				break;
		}
	}
	// stopGame
	stopGame() {
		document.querySelector('canvas').addEventListener('click', () => {
			clearTimeout(this.timeOut);
			document.querySelector('#start').style.display = 'block';
			document.querySelector('#start').innerHTML = 'Continue';
			this.snake.soundPause();
			// console.log('ok');
		});
	}

	//tiep tuc game
	startGame() {
		document.querySelector('#start').addEventListener('click', () => {
			this.loop();
			document.querySelector('#start').style.display = 'none';
			// console.log('ok')
		});
	}

	//update food
	update() {
		this.snake.update();
		if (this.snake.eat(this.food.x, this.food.y)) {
			this.food.update();
		}
	}

	//ve canvas
	draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.snake.draw();
		this.food.draw();
	}

}

var g = new game();