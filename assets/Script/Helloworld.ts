const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;
    start() {
        cc.audioEngine.playMusic(this.bgm,true);

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
