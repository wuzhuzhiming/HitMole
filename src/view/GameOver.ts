/**Created by the LayaAirIDE*/
module view{
	export class GameOver extends ui.GameOverUI{
		constructor(){
			super();

			this.btnRestart.on(Laya.Event.CLICK, this, this.onBtnRestart);
		}

		updateScoreUI(score:number) : void {
			var scoreData : any = {}
			var temp : number = score;
			for (var i:number = 9; i >=0; i--) {
				scoreData["item"+i] = {index : Math.floor(temp%10)};
				temp /= 10;
			}
			this.scoreNums.dataSource = scoreData;
		}

		onBtnRestart() : void {
			this.removeSelf();
			GameMain.viewGame.removeSelf();
			Laya.stage.addChild(GameMain.viewGameStart);
		}
	}
}