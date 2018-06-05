//地鼠
var Mole = /** @class */ (function () {
    function Mole(normalState, hitState, scoreImg, downY, hitCallBackHD) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.scoreImg = scoreImg;
        this.downY = downY;
        this.hitCallBackHD = hitCallBackHD;
        this.upY = this.normalState.y;
        this.scoreY = scoreImg.y;
        this.reset();
        this.normalState.on(Laya.Event.MOUSE_DOWN, this, this.hit);
    }
    //重置
    Mole.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.scoreImg.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    };
    //显示
    Mole.prototype.show = function () {
        if (this.isActive) {
            return;
        }
        this.moleType = Math.random() < 0.3 ? 1 : 2;
        this.normalState.skin = "ui/mouse_normal_" + this.moleType + ".png";
        this.hitState.skin = "ui/mouse_hit_" + this.moleType + ".png";
        this.scoreImg.skin = "ui/score_" + this.moleType + ".png";
        this.isActive = true;
        this.isShow = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        this.scoreImg.y = this.scoreY;
        //动画，地鼠从低到高，动画完成之后调用showComplete函数
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, this.showComplete));
    };
    //停留
    Mole.prototype.showComplete = function () {
        if (this.isShow && !this.isHit) {
            //2秒钟后调用hide函数
            Laya.timer.once(2000, this, this.hide);
        }
    };
    //消失
    Mole.prototype.hide = function () {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            //动画，地鼠从高到低，动画完成之后调用reset函数
            Laya.Tween.to(this.normalState, { y: this.downY }, 300, Laya.Ease.backIn, Laya.Handler.create(this, this.reset));
        }
    };
    //受击
    Mole.prototype.hit = function () {
        if (this.isShow && !this.isHit) {
            this.isHit = true;
            this.isShow = false;
            Laya.timer.clear(this, this.hide);
            this.normalState.visible = false;
            this.hitState.visible = true;
            Laya.timer.once(500, this, this.reset);
            this.hitCallBackHD.runWith(this.moleType);
            this.showScore();
        }
    };
    //飘分
    Mole.prototype.showScore = function () {
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, { y: this.scoreY, scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backInOut);
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map