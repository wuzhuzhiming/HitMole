
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {
		public hit:Laya.FrameAnimation;
		public timeBar:Laya.ProgressBar;
		public scoreNums:Laya.Box;
		public hammerImg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":186,"x":156,"name":"item0"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-01.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":185,"x":344,"name":"item1"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-02.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":191,"x":541,"name":"item2"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-03.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":277,"x":128,"name":"item3"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-04.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":278,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-05.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":277,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-06.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":372,"x":120,"name":"item6"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-07.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":379,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-08.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":377,"x":562,"name":"item8"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-09.png"}},{"type":"Image","props":{"y":25,"x":62,"skin":"ui/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":7,"x":9,"var":"timeBar","value":1,"skin":"ui/progress_time.png"}},{"type":"Box","props":{"y":38,"x":15,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]},{"type":"Image","props":{"y":330,"x":415,"width":98,"var":"hammerImg","skin":"ui/hammer.png","rotation":20,"pivotY":43,"pivotX":49,"height":77},"compId":61}],"animations":[{"nodes":[{"target":61,"keyframes":{"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":61,"key":"rotation","index":5}]}}],"name":"hit","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}

module ui {
    export class GameOverUI extends View {
		public btnRestart:Laya.Button;
		public scoreNums:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":500,"height":300},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/overBg.png","sizeGrid":"20,20,20,20","height":300}},{"type":"Button","props":{"y":179,"x":161,"var":"btnRestart","stateNum":2,"skin":"ui/btn_restart.png"}},{"type":"Image","props":{"y":66,"x":30,"skin":"ui/total Score.png"}},{"type":"Box","props":{"y":100,"x":265,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"ui/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"ui/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"ui/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"ui/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"ui/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"ui/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"ui/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"ui/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"ui/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"ui/clip_number.png","name":"item9","clipX":10}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class GameStartUI extends View {
		public btnGameStart:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"ui/help.png"}},{"type":"Button","props":{"y":402,"x":311,"var":"btnGameStart","stateNum":2,"skin":"ui/btn_start.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}
