// 程序入口
class GameMain{
    constructor()
    {
        //初始化
        Laya.init(800,600);
        Laya.stage.bgColor = "#ffcccc";

        //加载资源
        var resArray:Array<any> = [
            {url:"res/atlas/ui.atlas", type:Laya.Loader.ATLAS},
            {url:"ui/back.png", type:Laya.Loader.IMAGE}
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this,this.OnLoaded));
    }

    //资源加载完成
    OnLoaded() : void{
        var main_view:GameView = new GameView();
        Laya.stage.addChild(main_view);
    }
}
new GameMain();