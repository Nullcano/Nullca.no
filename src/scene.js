import * as BABYLON from 'babylonjs';

"use strict";
const { ArcRotateCamera, Vector3, MeshBuilder, Color4, DefaultRenderingPipeline, TransformNode } = BABYLON;

export const createScene = (canvas) => {
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor.set(0, 0, 0, 0);
    const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 4, 10, new Vector3(), scene);
    camera.attachControl(engine.getRenderingCanvas());
    camera.enablePointerMoveEvents = true;
    camera.wheelPrecision = 100;
    const WIDTH = 5;
    const DEPTH = 2;
    const N_LINE = 128;
    const N_SEG = 32;
    const lines0 = [];
    const stepX = WIDTH / N_LINE;
    const stepZ = DEPTH / N_SEG;
    const colors0 = [];
    for (let i = 0; i < N_LINE; ++i) {
        const x = -WIDTH / 2 + i * stepX;
        const lineSegs = [];
        const segColors = [];
        for (let j = 0; j < N_SEG; ++j) {
            lineSegs.push(new Vector3(x, computeY(i, j, i), -DEPTH / 2 + j * stepZ));
            const I = 2 * Math.abs(i / N_LINE - 0.5);
            segColors.push(new Color4(0, 0, 0));
        }
        lines0.push(lineSegs);
        colors0.push(segColors);
    }
    const layer0 = MeshBuilder.CreateLineSystem('lineSystem', {
        lines: lines0,
        updatable: true,
        colors: colors0
    }, scene);
    let i = 0;
    let dir = 1;
    let intervalInFrame = 2;
    let frameCount = -1;
    function computeY(lineIndex = 0, segIndex = 0, t = 0) {
        return 0.5 * Math.sin(t)
            + (0.5 + 3 * Math.abs(lineIndex / N_LINE - 0.5)) // amp.
                * Math.sin((segIndex / N_SEG * Math.PI * 2
                    + lineIndex // offsetX based on line index
                    + t / 10 // offsetX based on varable t
                )
                    * 0.5 // freq
                );
    }
    layer0.onBeforeRenderObservable.add(() => {
        ++frameCount;
        if (frameCount % intervalInFrame !== 0) {
            return;
        }
        let line = lines0[i];
        for (let j = 0; j < line.length; ++j) {
            const point = line[j];
            point.y = computeY(i, j, frameCount);
        }
        line = lines0[N_LINE - i - 1];
        for (let j = 0; j < line.length; ++j) {
            const point = line[j];
            point.y = computeY(i, j, frameCount);
        }
        MeshBuilder.CreateLineSystem(layer0.name, {
            instance: layer0,
            lines: lines0,
            colors: colors0
        }, scene);
        if (dir > 0) {
            if (++i >= N_LINE / 2) {
                dir *= -1;
            }
        }
        else {
            if (--i === 0) {
                dir *= -1;
            }
        }
    });
    layer0.rotation.z = Math.PI / 4;
    const layer1 = layer0.createInstance('');
    layer1.rotation.x = Math.PI / 2;
    const layer2 = layer0.createInstance('');
    layer2.rotation.y = Math.PI / 2;
    const layer0a = layer0.createInstance('');
    layer0a.rotation.z = -Math.PI / 4;
    const layers = new TransformNode('layers');
    layer0.parent =
        layer1.parent =
            layer2.parent =
                layer0a.parent = layers;
    layers.rotation.y = -Math.PI * 0.75;
    const rp = new DefaultRenderingPipeline();
    rp.bloomScale = 1;
    rp.bloomEnabled = true;
    rp.bloomThreshold = 0.5;
    rp.bloomWeight = 3;

    engine.runRenderLoop(() => { scene.render(); });
    addEventListener('resize', () => { engine.resize(); });

    return scene;
};