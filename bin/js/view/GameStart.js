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
    var GameStart = /** @class */ (function (_super) {
        __extends(GameStart, _super);
        function GameStart() {
            var _this = _super.call(this) || this;
            _this.btnGameStart.on(Laya.Event.CLICK, _this, _this.onBtnGameStartClick);
            return _this;
        }
        //开始游戏按钮点击相应函数
        GameStart.prototype.onBtnGameStartClick = function () {
            if (!GameMain.viewGame) {
                GameMain.viewGame = new GameView();
            }
            //移除开始页面
            this.removeSelf();
            //显示游戏页面
            GameMain.viewGame.gameStart();
            Laya.stage.addChild(GameMain.viewGame);
        };
        return GameStart;
    }(ui.GameStartUI));
    view.GameStart = GameStart;
})(view || (view = {}));
//# sourceMappingURL=GameStart.js.map