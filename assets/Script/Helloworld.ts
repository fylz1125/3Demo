const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    onLoad() {
        cc.loader.loadRes("rumba", function (err, sound) {
            cc.audioEngine.playMusic(sound, true);
        });
    }


    start() {
        // cc.audioEngine.playMusic(this.bgm,true);

    }

    playSamba() {
        let animation = this.getComponent(cc.Animation);
        animation.play("mixamo.com");
    }

    playMacarena() {
        let animation = this.getComponent(cc.Animation);
        animation.play("macarena");
    }
}
