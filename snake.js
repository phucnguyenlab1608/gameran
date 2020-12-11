class snake {
	constructor(snack) {
		this.game = snack;
		this.x = 0;
		this.y = 0;
		this.grid = 20;
		this.dx = this.grid;
		this.dy = 0;
		this.cell = [];
		this.maxCells = 2;
		this.mySound = new sound('bg.mp3');
		this.endGameSound = new sound('phaohoa.mp3');
		this.eatSound = new sound('eat.mp3')
		// this.gameLoop = new game(this);
		// this.openSound = null;
		this.anHien = true;


	}
	// xu ly am thanh pause
	soundPause() {
		this.mySound.stop();
		this.endGameSound.stop();
		// this.eatSound.stop();
	}
	//update
	update() {
		if (this.endGame()) {
			this.x += this.dx;
			this.y += this.dy;
		}

		if (this.x >= this.game.canvas.width) {
			this.x = 0;
		}

		else if (this.x < 0) {
			this.x = this.game.canvas.width;
		}

		if (this.y >= this.game.canvas.height) {
			this.y = 0;
		}

		else if (this.y < 0) {
			this.y = this.game.canvas.height;
		}

		this.cell.unshift({ x: this.x, y: this.y });
		if (this.cell.length > this.maxCells) {
			this.cell.pop();
		}
		this.catchHandle();
		this.diem();
	}
	//diem cua game
	diem() {
		let max = this.maxCells - 1;
		let i = 0;
		for (i; i < max; i++) {
			document.getElementById('diemGame').innerHTML = "Điểm:" + i;
			// console.log(i)	
		}
		return i - 1;
	}
	//ve phan thong bao ket thuc game
	draw() {
		// this.mySound.start();
		this.startSound();
		for (let i = 0; i < this.cell.length; i++) {
			this.game.context.fillStyle = 'rgb(83,83,83)';
			this.game.context.fillRect(this.cell[i].x, this.cell[i].y, this.grid, this.grid);
		}

		if (!this.endGame()) {
			this.game.context.font = '50px Arial';
			this.game.context.fillStyle = 'rgb(65, 87, 185)';
			this.game.context.fillText("Điểm của bạn là", 350, 250);
			this.game.context.font = '40px Arial';
			this.game.context.fillStyle = 'red';
			this.game.context.fillText(this.diem(), 490, 290);
			this.endGameSound.start();
			this.readLoad();
			this.mySound.stop();
			this.eatSound.stop();
		}
		//khoi chay am nhac o day 

	}
	//xu ly bat tat am thanh
	startSound() {
		//nghien cuu them 
		let audioSound = '';
		// console.log(audioSound);
		audioSound = this.mySound.start();
		let bat = document.querySelector('#bat');
		let tat = document.querySelector('#tat');
		tat.addEventListener("click", () => {
			if (this.anHien === true) {
				bat.style.display = 'block';
				tat.style.display = 'none';
				this.anHien = false;
				audioSound = this.mySound.stop();
				// console.log('da ket noi');
			}
		});
		bat.addEventListener('click', () => {
			if (this.anHien === false) {
				tat.style.display = 'block';
				bat.style.display = 'none';
				this.anHien = true;
				audioSound = this.mySound.start();

			}
		});
	}

	//chay lai game
	readLoad() {
		let btn = document.getElementById('loadingGame');
		this.btn = document.getElementById('loadingGame').style.display = 'block';
		btn.addEventListener('click', () => {
			// console.log('okkk');
			location.reload();
			this.gameLoop.loop();
		});

	}
	//xu ly ban phim
	catchHandle() {
		document.addEventListener('keydown', (e) => {
			if (e.which == 37 && this.dx == 0) {
				this.dx = -this.grid;
				this.dy = 0;
			}

			else if (e.which == 38 && this.dy == 0) {
				this.dx = 0;
				this.dy = -this.grid;
			}

			else if (e.which == 39 && this.dx == 0) {
				this.dx = this.grid;
				this.dy = 0;
			}

			else if (e.which == 40 && this.dy == 0) {
				this.dx = 0;
				this.dy = this.grid;
			}
		});

	}
	//an vao game 
	eat(x, y) {
		if (this.x == x && this.y == y) {
			this.maxCells++;
			this.eatSound.start();
			return true;
		}
		return false;
	}
	//xu ly ket thuc game
	endGame() {
		for (let i = 1; i < this.cell.length; i++) {
			if (this.x == this.cell[i].x && this.y == this.cell[i].y) {
				return false;
			}
		}
		return true;
	}
}