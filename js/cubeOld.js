var container = document.getElementById("canvas");
document.body.appendChild(container);

var scene = new THREE.Scene();

var width = container.offsetWidth;
var height = container.offsetHeight;

var aspect = width / height;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:true});
renderer.setSize(width,height);

container.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshNormalMaterial();
var cube1 = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material);
var cube3 = new THREE.Mesh(geometry, material);
var cube4 = new THREE.Mesh(geometry, material);
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);
scene.add(cube4);
cube1.translateY(2.5);
cube2.translateY(1);
cube3.translateY(-1);
cube4.translateY(-2.5);

var cubes = [cube1,cube2,cube3,cube4];

camera.position.z = 5;

var selectedIndex = 0;

var render = function(){
	requestAnimationFrame(render);
	cubes[selectedIndex].rotation.x += 0.02;
	cubes[selectedIndex].rotation.y += 0.03;
	renderer.render(scene,camera);
}

render();

var label = document.createElement('div');
label.style.position = 'absolute';
label.style.color = 'white';
label.style.width="100%";
label.innerHTML = "Home";
label.style.textAlign = 'center';
label.style.marginTop = -width/2-20+'px';
label.style.fontSize = 25+'px';
label.style.fontFamily = "\"HelveticaNeue-Bold\", \"Helvetica Neue Bold\", \"Helvetica Neue\", Helvetica";

container.appendChild(label);