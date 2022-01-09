class App{
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        // CSS 픽셀의 크기를 물리적 픽셀의 크기로 나눈 값
        // 하나의 CSS 픽셀을 그릴 때 사용해야 하는 장치 픽셀의 수
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        
        // useCapture = False
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ctx.fillStyle = '#cddb49';
        this.ctx.beginPath();
        this.ctx.arc(
            this.stageWidth / 2,
            this.stageHeight / 2,
            300,
            0, 2 * Math.PI
        );
        this.ctx.fill();
    }
}

window.onload = () => {
    new App();
}