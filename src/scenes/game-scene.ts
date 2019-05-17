import { Player } from "../objects/player"
import { Platform } from "../objects/platform"
import { Bomb } from "../objects/Bomb"
import { MovingPlatform } from "../objects/movingplatform"

export class GameScene extends Phaser.Scene {

    private player : Player
    private platforms: Phaser.GameObjects.Group
    private stars: Phaser.Physics.Arcade.Group
    private bombs: Phaser.GameObjects.Group
    private collectedgems = 0
    private scorefield

    constructor() {
        super({ key: "GameScene" })
    }

    init(): void {
        console.log("Dit is de game-scene")
    }

    create(): void {
        this.add.image(0, 0, 'sky').setOrigin(0, 0)      
    
        // 11 STARS
        this.stars = this.physics.add.group({
            key: 'gem',
            repeat: 11,
            setXY: { x: 12, y: 30, stepX: 70 },
        })

        // add enemy to the playing field
        this.bombs = this.add.group()
        // this.bombs.add(new Bomb(this, 20, 20), true)

        for (let i = 0; i < 1; i++){
            this.bombs.add(new Bomb(this, 20, 20), true)
        }

        // TODO add player
        this.player = new Player(this)


            // Uitzoeken hoe platformen op een makkelijke manier kunnen worden toegevoegd.
        this.platforms = this.add.group({ runChildUpdate: true })
        this.platforms.addMultiple([
            new Platform (this, 800, 574, "ground"),
            new Platform (this, 200, 250, "ice"),
            new Platform (this, 300, 400, "platform"),
            new MovingPlatform (this, 400, 200, "platform"),
            new Platform (this, 650, 490, "house"),
            new Platform (this, 550, 500, "tree"),
            new Platform (this, 100, 100, "long"),
            new Platform (this, 130, 100, "long"),
            new Platform (this, 160, 100, "long"),
            new Platform (this, 190, 100, "long"),
            new Platform (this, 100, 500, "long"),
            new Platform (this, 130, 500, "long"),
            new Platform (this, 160, 500, "long"),
            new Platform (this, 190, 500, "long"),
            new Platform (this, 300, 500, "long"),
            new Platform (this, 330, 500, "long"),
            new Platform (this, 360, 500, "long"),
            new Platform (this, 390, 500, "long"),
            new Platform (this, 800, 100, "long"),
            new Platform (this, 830, 100, "long"),
            new Platform (this, 860, 100, "long"),
            new Platform (this, 890, 100, "long"),
            new Platform (this, 800, 300, "long"),
            new Platform (this, 830, 300, "long"),
            new Platform (this, 860, 300, "long"),
            new Platform (this, 890, 300, "long"),
            new Platform (this, 920, 300, "long"),
        ], true)

        // adds score count to the window
        this.scorefield = this.add.text(200, 20,  + this.collectedgems+ ' STARS COLLECTED', { fontFamily: 'Sofia', fontSize: 20, color: '#000000' }).setOrigin(0.5).setStroke('#2ac9be', 2)
        

        // increases the size of the playing field
        this.physics.world.bounds.width = 1600
        this.physics.world.bounds.height = 2000

        // Default Size (800, 600)
        this.cameras.main.setSize(800, 600)             // canvas size
        this.cameras.main.setBounds(0, 0, 1600, 2000)   // world size
        this.cameras.main.startFollow(this.player)
        
        // define collisions for bouncing, and overlaps for pickups
        this.physics.add.collider(this.stars, this.platforms)
        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.bombs, this.platforms)
        
        this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this)
        this.physics.add.overlap(this.player, this.bombs, this.hitBomb, null, this)
    }

    private hitBomb (player:Player, bomb){
        this.scene.start("EndScene")
        console.log("je bent dood!")
    }

    private collectStar(player : Player , star) : void {
        this.stars.remove(star, true, true)
        // this.r.values.score++
        this.collectedgems++
        console.log(this.collectedgems)
        this.scorefield.text = this.collectedgems + " gems verzameld"

        // TO DO check if we have all the stars, then go to the end scene

        if (this.collectedgems == 12) {
            this.scene.start("GameScene")
            this.collectedgems = 0
            console.log("alles verzameld!")
        }
    
    }

    update(){
        this.player.update()
    }

}
