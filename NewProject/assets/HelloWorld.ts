import { _decorator, Component, Node, native } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    start() {
        // console.info('thermalHeadroom: ' + native.adpf.thermalHeadroom);
        console.info('thermalHeadroom: ' + native); // [Object object]
        console.info('thermalHeadroom: ' + native.adpf); // undefined
        console.info(native.adpf);
        // PROP_MIN_SDK_VERSION=31
        console.info('thermalHeadroom: ' + JSON.stringify(native)); // "adpf":{"thermalHeadroom":0.7152467370033264,"thermalStatus":0,"thermalStatusMin":0,"thermalStatusMax":6,"thermalStatusNormalized":0}
    }

    update(deltaTime: number) {
        if ( native.adpf ) {
            console.info('thermalHeadroom: ' + JSON.stringify(native.adpf)); // "adpf":{"thermalHeadroom":0.7152467370033264,"thermalStatus":0,"thermalStatusMin":0,"thermalStatusMax":6,"thermalStatusNormalized":0}
        }
    }
}

