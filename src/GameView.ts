class GameView extends ui.GameUI {
    private moles : Array<Mole>;
    private moleNum : number = 9;
    private score : number = 0;
    private timeBarLen : number = 30;

    constructor() {
        super();

        //创建地鼠
        this.moles = new Array<Mole>();
        var hitCallBackHD : Laya.Handler = Laya.Handler.create(this, this.setScore, null, false);
        for (var i = 0; i < this.moleNum; i++) {
            var box:Laya.Box = this.getChildByName("item"+i) as Laya.Box;
            var mole:Mole = new Mole(box.getChildByName("normal") as Laya.Image, box.getChildByName("hit") as Laya.Image, 
                box.getChildByName("scoreImg") as Laya.Image, 29, hitCallBackHD);
            this.moles.push(mole);
        }

        //隐藏光标，添加鼠标按下与移动的处理
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    }

    onLoop() : void {
        this.timeBar.value -= 1 / this.timeBarLen;
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }

        var index : number = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    }

    gameStart() : void {
        //隐藏光标，添加鼠标按下与移动的处理
        Laya.Mouse.hide();
        this.hammerImg.visible = true;

        //开始循环
        this.timeBar.value = this.timeBarLen;
        this.score = 0;
        this.updateScoreUI();
        Laya.timer.loop(1000, this, this.onLoop);
    }

    gameOver() : void {
        //显示光标
        Laya.Mouse.show();
        this.hammerImg.visible = false;
        //停止主循环
        Laya.timer.clear(this, this.onLoop);

        if (!GameMain.viewGameOver) {
            GameMain.viewGameOver = new view.GameOver();
        }

        //显示游戏结束页面
        GameMain.viewGameOver.centerX = 0;
        GameMain.viewGameOver.centerY = 0;
        GameMain.viewGameOver.updateScoreUI(this.score);
        Laya.stage.addChild(GameMain.viewGameOver);
    }

    setScore(type:number) : void {
        this.score += type===1 ? -100 : 100;
        if (this.score < 0) {
            this.score = 0;
        }
        this.updateScoreUI();
    }

    updateScoreUI() : void {
        var scoreData : any = {}
        var temp : number = this.score;
        for (var i:number = 9; i >=0; i--) {
            scoreData["item"+i] = {index : Math.floor(temp%10)};
            temp /= 10;
        }
        this.scoreNums.dataSource = scoreData;
    }

    onMouseDown() : void {
        this.hit.play(0, false);
    }

    onMouseMove() : void {
        this.hammerImg.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }
}