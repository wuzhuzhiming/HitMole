var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super.call(this) || this;
        _this.moleNum = 9;
        _this.score = 0;
        //创建地鼠
        _this.moles = new Array();
        var hitCallBackHD = Laya.Handler.create(_this, _this.setScore, null, false);
        for (var i = 0; i < _this.moleNum; i++) {
            var box = _this.getChildByName("item" + i);
            var mole = new Mole(box.getChildByName("normal"), box.getChildByName("hit"), box.getChildByName("scoreImg"), 29, hitCallBackHD);
            _this.moles.push(mole);
        }
        //隐藏光标，添加鼠标按下与移动的处理
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN, _this, _this.onMouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, _this, _this.onMouseMove);
        //开始循环
        Laya.timer.loop(1000, _this, _this.onLoop);
        return _this;
    }
    GameView.prototype.onLoop = function () {
        this.timeBar.value -= 1 / 60;
        if (this.timeBar.value <= 0) {
            this.gameOver();
            return;
        }
        var index = Math.floor(Math.random() * this.moleNum);
        this.moles[index].show();
    };
    GameView.prototype.gameOver = function () {
        //停止主循环
        Laya.timer.clear(this, this.onLoop);
        console.log("游戏结束！");
    };
    GameView.prototype.setScore = function (type) {
        this.score += type === 1 ? -100 : 100;
        if (this.score < 0) {
            this.score = 0;
        }
        this.updateScoreUI();
    };
    GameView.prototype.updateScoreUI = function () {
        var scoreData = {};
        var temp = this.score;
        for (var i = 9; i >= 0; i--) {
            scoreData["item" + i] = { index: Math.floor(temp % 10) };
            temp /= 10;
        }
        this.scoreNums.dataSource = scoreData;
    };
    GameView.prototype.onMouseDown = function () {
        this.hit.play(0, false);
    };
    GameView.prototype.onMouseMove = function () {
        this.hammerImg.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    return GameView;
}(ui.GameUI));
//# sourceMappingURL=GameView.js.map