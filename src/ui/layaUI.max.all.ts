
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"ui/back.png"}},{"type":"Box","props":{"y":186,"x":156,"name":"item0"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-01.png"}}]},{"type":"Box","props":{"y":185,"x":344,"name":"item1"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-02.png"}}]},{"type":"Box","props":{"y":191,"x":541,"name":"item2"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-03.png"}}]},{"type":"Box","props":{"y":277,"x":128,"name":"item3"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-04.png"}}]},{"type":"Box","props":{"y":278,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-05.png"}}]},{"type":"Box","props":{"y":277,"x":546,"name":"item5"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-06.png"}}]},{"type":"Box","props":{"y":372,"x":120,"name":"item6"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-07.png"}}]},{"type":"Box","props":{"y":379,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-08.png"}}]},{"type":"Box","props":{"y":377,"x":562,"name":"item8"},"child":[{"type":"Image","props":{"y":7,"x":6,"skin":"ui/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":19,"x":6,"skin":"ui/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":91,"skin":"ui/mask-09.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);

        }

    }
}
