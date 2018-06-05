// 程序入口
class GameMain{
    public static viewGameStart : view.GameStart;
    public static viewGame : GameView;
    public static viewGameOver : view.GameOver;

    constructor()
    {
        //初始化
        Laya.init(800,600);
        Laya.stage.bgColor = "#ffcccc";
        //设置屏幕缩放模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        //设置屏幕水平居中
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        //设置屏幕垂直居中
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //设置屏幕适配(横屏、竖屏)
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;

        //加载资源
        var resArray:Array<any> = [
            {url:"res/atlas/ui.atlas", type:Laya.Loader.ATLAS},
            {url:"ui/back.png", type:Laya.Loader.IMAGE},
            {url:"ui/help.png", type:Laya.Loader.IMAGE}
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this,this.OnLoaded));
    }

    //资源加载完成
    OnLoaded() : void{
        // var main_view:GameView = new GameView();
        // Laya.stage.addChild(main_view);

        GameMain.viewGameStart = new view.GameStart();
        Laya.stage.addChild(GameMain.viewGameStart);
    }
}
new GameMain();