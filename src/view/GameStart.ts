/**Created by the LayaAirIDE*/
module view{
	export class GameStart extends ui.GameStartUI{
		constructor(){
			super();

			this.btnGameStart.on(Laya.Event.CLICK, this, this.onBtnGameStartClick);
		}

		//开始游戏按钮点击相应函数
		onBtnGameStartClick() : void {
			if (!GameMain.viewGame) {
				GameMain.viewGame = new GameView();
			}

			//移除开始页面
			this.removeSelf();
			//显示游戏页面
			GameMain.viewGame.gameStart();
			Laya.stage.addChild(GameMain.viewGame);
		}
	}
}