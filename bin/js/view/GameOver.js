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
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var GameOver = /** @class */ (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            var _this = _super.call(this) || this;
            _this.btnRestart.on(Laya.Event.CLICK, _this, _this.onBtnRestart);
            return _this;
        }
        GameOver.prototype.updateScoreUI = function (score) {
            var scoreData = {};
            var temp = score;
            for (var i = 9; i >= 0; i--) {
                scoreData["item" + i] = { index: Math.floor(temp % 10) };
                temp /= 10;
            }
            this.scoreNums.dataSource = scoreData;
        };
        GameOver.prototype.onBtnRestart = function () {
            this.removeSelf();
            GameMain.viewGame.removeSelf();
            Laya.stage.addChild(GameMain.viewGameStart);
        };
        return GameOver;
    }(ui.GameOverUI));
    view.GameOver = GameOver;
})(view || (view = {}));
//# sourceMappingURL=GameOver.js.map