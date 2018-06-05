//地鼠

class Mole {
    private normalState:Laya.Image;
    private hitState : Laya.Image;
    private scoreImg : Laya.Image;
    private downY : number;
    private upY : number;
    private scoreY : number;
    private hitCallBackHD : Laya.Handler;         //受击回调函数处理器

    private isActive : boolean;
    private isShow : boolean;
    private isHit : boolean;
    private moleType : number;                  //地鼠类型

    constructor(normalState:Laya.Image, hitState:Laya.Image, scoreImg:Laya.Image, downY:number, hitCallBackHD:Laya.Handler) {
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
    reset() : void {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.scoreImg.visible = false;
        this.isActive = false;
        this.isShow = false;
        this.isHit = false;
    }

    //显示
    show() : void {
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
        Laya.Tween.to(this.normalState, {y:this.upY}, 500, Laya.Ease.backInOut, Laya.Handler.create(this,this.showComplete));
    }

    //停留
    showComplete() : void {
        if (this.isShow && !this.isHit) {
            //2秒钟后调用hide函数
            Laya.timer.once(2000, this, this.hide);
        }
    }

    //消失
    hide() : void {
        if (this.isShow && !this.isHit) {
            this.isShow = false;
            //动画，地鼠从高到低，动画完成之后调用reset函数
            Laya.Tween.to(this.normalState, {y:this.downY}, 300, Laya.Ease.backIn, Laya.Handler.create(this,this.reset));
        }
    }

    //受击
    hit() : void {
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
    }

    //飘分
    showScore() : void {
        this.scoreImg.y = this.scoreY + 30;
        this.scoreImg.scale(0, 0);
        this.scoreImg.visible = true;
        Laya.Tween.to(this.scoreImg, {y:this.scoreY,scaleX:1,scaleY:1}, 300, Laya.Ease.backInOut);
    }
}