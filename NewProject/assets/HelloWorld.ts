import { _decorator, assert, AudioSource, Component, Node, native } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {

    public _audioSource: AudioSource = null!

    @property(AudioSource)
    bgmSource: AudioSource = null;

    start() {
        // console.info('thermalHeadroom: ' + native.adpf.thermalHeadroom);
        console.info('thermalHeadroom: ' + native); // [Object object]
        console.info('thermalHeadroom: ' + native.adpf); // undefined
        console.info(native.adpf);
        // PROP_MIN_SDK_VERSION=31
        console.info('thermalHeadroom: ' + JSON.stringify(native)); // "adpf":{"thermalHeadroom":0.7152467370033264,"thermalStatus":0,"thermalStatusMin":0,"thermalStatusMax":6,"thermalStatusNormalized":0}

        if ( native.adpf ) {
            console.info('thermalHeadroom: ' + JSON.stringify(native.adpf)); // "adpf":{"thermalHeadroom":0.7152467370033264,"thermalStatus":0,"thermalStatusMin":0,"thermalStatusMax":6,"thermalStatusNormalized":0}
        }
    }

    update(deltaTime: number) {
        if ( native.adpf ) {
            // console.info('thermalHeadroom: ' + JSON.stringify(native.adpf)); // "adpf":{"thermalHeadroom":0.7152467370033264,"thermalStatus":0,"thermalStatusMin":0,"thermalStatusMax":6,"thermalStatusNormalized":0}
        }
    }

    buttonClickPlayWave() {
        console.info('HelloWorld.buttonClickPlayWave');
        const audioSource = this.node.getComponent(AudioSource);
        assert(audioSource);
        this._audioSource = audioSource;
        this._audioSource.play();

        if ( this.bgmSource != null ) {
            this.bgmSource.play();
        }
    }

    buttonClickPause() {
        console.info('HelloWorld.buttonClickPause');
        if ( this._audioSource != null ) {
            this._audioSource.pause();
        }
        if ( this.bgmSource != null ) {
            this.bgmSource.pause();
        }
    }
}

