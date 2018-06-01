class GameView extends ui.GameUI {
    private mole:Mole;

    constructor() {
        super();

        this.mole = new Mole(this.normal, this.hit, 31);
        this.mole.show();
    }
}