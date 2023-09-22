import React from "react";
import * as THREE from "three";

export default class IndexBackGround extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%", position: "fixed", left: "0px", top: "0px", border: "1px solid black", boxSizing: "border-box", overflow: "hidden", zIndex: "-1" }}>
                <div style={{width: "100%", height: "100%"}} ref={el => this.canvasDOM = el}></div>
            </div>
        )
    }

    componentDidMount() {
        const camera = new THREE.PerspectiveCamera(
            40, 
            this.canvasDOM.offsetWidth / this.canvasDOM.offsetHeight, 
            1, 
            15000
        );
        camera.position.z = 3200;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xfcfcff);

        // const sphere = new THREE.Mesh(
        //     new THREE.SphereGeometry(100, 20, 20), 
        //     new THREE.MeshNormalMaterial()
        // );
        // scene.add(sphere);

        const geometry = new THREE.CylinderGeometry(0, 10, 100, 12);
        geometry.rotateX(Math.PI / 2);

        const material = new THREE.MeshNormalMaterial();

        for (let i = 0; i < 500; i++) {

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.x = Math.random() * 4000 - 2000;
            mesh.position.y = Math.random() * 4000 - 2000;
            mesh.position.z = Math.random() * 4000 - 2000;
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 2 + 2;
            scene.add(mesh);

        }

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(this.canvasDOM.offsetWidth, this.canvasDOM.offsetHeight);
        this.canvasDOM.appendChild(renderer.domElement);


        // 交互部分
        var mouseX = 0;
        var mouseY = 0;
        var windowHalfX = this.canvasDOM.offsetWidth / 2;
        var windowHalfY = this.canvasDOM.offsetHeight / 2;

        var onWindowResize = () => {

            windowHalfX = this.canvasDOM.offsetHeight / 2;
            windowHalfY = this.canvasDOM.offsetHeight / 2;

            camera.aspect = this.canvasDOM.offsetWidth / this.canvasDOM.offsetHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( this.canvasDOM.offsetWidth,this.canvasDOM.offsetHeight );

        }

        var onDocumentMouseMove = ( event ) => {

            mouseX = ( event.clientX - windowHalfX ) * 10;
            mouseY = ( event.clientY - windowHalfY ) * 10;

        }

        window.addEventListener('resize', onWindowResize);
        window.document.addEventListener("mousemove", onDocumentMouseMove);

        const lookAtPoint = new THREE.Vector3(0, 0, -2000);

        function render() {

            // const time = Date.now() * 0.0005;

            // sphere.position.x = Math.sin( time * 0.7 ) * 2000;
            // sphere.position.y = Math.cos( time * 0.5 ) * 2000;
            // sphere.position.z = Math.cos( time * 0.3 ) * 2000;

            lookAtPoint.x = mouseX;
            lookAtPoint.y = - mouseY;

            for ( let i = 1, l = scene.children.length; i < l; i ++ ) {

                scene.children[ i ].lookAt( lookAtPoint );

            }

            camera.position.x += ( mouseX - camera.position.x ) * .05;
            camera.position.y += ( - mouseY - camera.position.y ) * .05;
            camera.lookAt( scene.position );

            renderer.render( scene, camera );

        }


        (function animation() {
            render();
            requestAnimationFrame(animation);
        })();
    }

    
}