class sound {
    constructor(src) {
        this.src = src;
        this.audio = new Audio('amthanh/' + this.src);
    }
    start() {
        this.audio.play();
        // console.log('ok')
    }
    stop() {
        this.audio.pause();
    }
    // xu ly tat nhac
    // btSound() {
    //     let bat = document.querySelector('#bat');
    //     let tat = document.querySelector('#tat');
        
    //     tat.addEventListener("click", () => {
    //         if (this.anHien === true) {
    //             bat.style.display = 'block';
    //             tat.style.display = 'none';
    //             this.anHien = false;
    //             this.stop();
    //             console.log('da ket noi');
    //         }
    //     });
    //     bat.addEventListener('click', () => {
    //         if (this.anHien === false) {
    //             tat.style.display = 'block';
    //             bat.style.display = 'none';
    //             this.anHien = true;
    //             this.start();
    //         }
    //     });
    // }
}