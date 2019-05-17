export class StartScene extends Phaser.Scene {

    constructor() {
        super({key: "StartScene"})
    }

    init(): void {
    }

    preload(): void {
    }

    create(): void {
        this.add.image(0, 0, 'sky').setOrigin(0, 0)

        let btn1 = this.add.text(400, 400, 'Start The Game', {fontFamily: 'Sofia', fontSize: 50, color: '#FFA500'}).setOrigin(0.5).setStroke('#7df2ea', 16)
        btn1.setInteractive()
        btn1.on('pointerdown', (pointer) => {
            this.scene.start('GameScene')
        })

        // this.add.text(400, 400, 'Start The Game', {fontFamily: 'Sofia', fontSize: 50, color: '#FFA500'}).setOrigin(0.5).setStroke('#7df2ea', 16)

        // add another image here

        // add text here

        this.add.text(400, 300, 'Bixbys Adventure', { fontFamily: 'Arial Black', fontSize: 70, color: '#2ac9be' }).setOrigin(0.5).setStroke('#7df2ea', 16)

        // add code here to switch to the GameScene, after a mouse click
        
    }
}
