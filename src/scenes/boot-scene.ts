export class BootScene extends Phaser.Scene {

    private graphics: Phaser.GameObjects.Graphics

    constructor() {
        super({ key: "BootScene" })
    }

    init(){
    }

    preload(): void {
        this.load.image('sky', require('../assets/background.png'))
        this.load.image('star', require('../assets/star.png'))
        this.load.image('bomb', require('../assets/bomb.png'))
        this.load.image('bmo', require('../assets/bmo.png'))
        this.load.image('ice', require('../assets/platform_ice.png'))
        this.load.image('platform', require('../assets/platform_grass.png'))
        this.load.image('ground', require('../assets/platform_ground.png'))
        this.load.image('tree', require('../assets/tree.png'))
        this.load.image('player', require('../assets/player-run-1.png'))
        this.load.image('house', require('../assets/house.png'))
        this.load.image('gem', require('../assets/gem.png'))
        this.load.image('long', require('../assets/platform-long.png'))
        this.load.image('doggo', require('../assets/doggo2Done.png'))

        this.load.on('complete', () => {
            console.log("everything is loaded")
            // add code here to switch to the start scene
            this.scene.start("StartScene")
        })
    }
}