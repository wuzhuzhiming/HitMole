// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        //初始化
        Laya.init(800, 600);
        Laya.stage.bgColor = "#ffcccc";
        //加载资源
        var resArray = [
            { url: "res/atlas/ui.atlas", type: Laya.Loader.ATLAS },
            { url: "ui/back.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.OnLoaded));
    }
    //资源加载完成
    GameMain.prototype.OnLoaded = function () {
        var main_view = new GameView();
        Laya.stage.addChild(main_view);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map