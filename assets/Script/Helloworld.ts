const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {


    onLoad() {
        
        this.getComponent(cc.SkeletonAnimation);
        cc.loader.loadRes("rumba", function (err, sound) {
            cc.audioEngine.playMusic(sound, true);
        });
        
    }


    playSamba() {
        let animation = this.getComponent(cc.Animation);
        animation.play("mixamo.com");
        
    }

    jumpLeft() {
        this.node.runAction(cc.jumpBy(1, -400, 0, 300, 2));
    }

    jumpRight() {
        this.node.runAction(cc.jumpBy(1, 400, 0, 300, 2));
    }

    playMacarena() {
        let animation = this.getComponent(cc.Animation);
        animation.play("macarena");
    }


}
