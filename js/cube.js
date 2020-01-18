
var scenes = [];
var renderers = [];
var colors = [];
var width, height;
var numCubes = 5;
var texts = [];
var selectedIndex, currentIndex;
var projector;

var growCubeIndices;
var shrinkCubeIndices;

$(document).ready(function(){
    //Register another event which call the script on window resize..
    $(window).resize(function()
    {
        //Call this function on resize
        adjustSpacing();
    });
    //Call this function on first load
    adjustSpacing();
});

function adjustSpacing()
{
    //Calculate window height
    var h = $(window).height();
    //Calculate height of 1st link
    var linkH = $(".canvas").first().height();
    //Get total number of links
    var totalLinks = $(".canvas").length;
    //Calculate top padding and bottom padding for each link
    var space = (h - (totalLinks * linkH)) / (totalLinks*2 + 1);
    $(".canvas").each(function(){
        //Apply padding on each link
        $(this).css("padding-top", space);
        $(this).css("padding-bottom", space);
    });    
}

function init(){
	texts = ["Home", "About", "Projects", "Resume", "Contact"]

	var color1 = new THREE.Color("rgb(244,42,1)");
	var color2 = new THREE.Color("rgb(247,120,1)");
	var color3 = new THREE.Color("rgb(252, 203, 74)");
	var color4 = new THREE.Color("rgb(254, 242, 94)");
	var color5 = new THREE.Color("rgb(85, 32, 0)");

	colors = [color1,color2,color3,color4,color5];


	for(var i = 1; i <= numCubes; i++){
		var container = document.getElementById("canvas"+i);
		// .appendChild(container);

		var scene = new THREE.Scene();

		scene.userData.element = container;
		var camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 1000);
		scene.userData.camera = camera;

		var width = container.offsetWidth;
		var height = container.offsetHeight;

		var renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setSize(width,height);
		container.appendChild(renderer.domElement);
		renderers.push(renderer);

		var geometry = new THREE.BoxGeometry(1,1,1);
		var material = new THREE.MeshStandardMaterial({
			color: colors[i-1],
			roughness: 0.2,
			metalness: 0,
			shading: THREE.FlatShading
		});
		var cube = new THREE.Mesh(geometry, material);
		cube.rotation.z += Math.PI/16;
		scene.add(cube);

		scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));
		var light = new THREE.DirectionalLight(0xffffff, 0.5);
		light.position.set(1,1,1);
		scene.add(light);

		camera.position.z = 5;

		var label = document.createElement('div');
		label.style.position = 'absolute';
		label.style.color = 'white';
		label.style.width="100%";
		label.innerHTML = texts[i-1];
		label.style.textAlign = 'center';
		label.style.marginTop = -width/2-18+'px';
		label.style.fontSize = 20+'px';
		label.style.fontFamily = "\"HelveticaNeue-Bold\", \"Helvetica Neue Bold\", \"Helvetica Neue\", Helvetica";

		label.style.mozUserSelect = "-moz-none";
		label.style.khtmlUserSelect = "none";
		label.style.webkitUserSelect = "none";
		label.style.msUserSelect = "none";
		label.style.userSelect = "none";

		label.style.textShadow = "0px 2px 4px #000000";

		container.appendChild(label);

		scenes.push(scene);

		renderer.render(scene,camera);

		growCubeIndices = [];
		shrinkCubeIndices = [];
	}

	selectedIndex = 0;
	currentIndex = 0;

	var url = window.location.href;
	var inx = 0;
	switch(url){
		case "http://riopelle.me/about":
			inx = 1;
			break;
		case "http://riopelle.me/projects":
			inx = 2;
			break;
		case "http://riopelle.me/resume":
			inx = 3;
			break;
		case "http://riopelle.me/contact":
			inx = 4;
			break;
		default:
			inx = 0;
			break;
	}
	selectedIndex = currentIndex = inx;

	// projector = new THREE.Projector();
	// document.addEventListener('mousemove',onDocumentMouseMove,false);
}

var render = function(){
	var sc = scenes[selectedIndex];

	sc.children[0].rotation.x += Math.PI/128;
	sc.children[0].rotation.y += Math.PI/128;

	var growDoneIndices = [];
	var shrinkDoneIndices = [];
	
	growCubeIndices.forEach(function(index){
		var gCube = scenes[index].children[0];
		var gX = gCube.scale.x;
		var gY = gCube.scale.y;
		var gZ = gCube.scale.z;

		if(gX<1.3){
			gCube.scale.set(gX+0.05,gY+0.05,gZ+0.05);
		}
		else{
			if(growDoneIndices.indexOf(index)==-1){
				growDoneIndices.push(index);
			}
		}
	});
	shrinkCubeIndices.forEach(function(index){
		var sCube = scenes[index].children[0];
		var sX = sCube.scale.x;
		var sY = sCube.scale.y;
		var sZ = sCube.scale.z;
		if(sX>1){
			sCube.scale.set(sX-0.05,sY-0.05,sZ-0.05);
		}
		else{
			if(shrinkDoneIndices.indexOf(index)==-1){
				shrinkDoneIndices.push(index);
			}
		}
	});
	growDoneIndices.forEach(function(index){
		var i = growCubeIndices.indexOf(index);
		growCubeIndices.splice(i,1);
	});
	shrinkDoneIndices.forEach(function(index){
		var i = shrinkCubeIndices.indexOf(index);
		shrinkCubeIndices.splice(i,1);
	});

	for(var i = 0; i <numCubes; i++){

		if(i!=selectedIndex){
			if((scenes[i].children[0].rotation.x % 2*Math.PI)>0.5){
				scenes[i].children[0].rotation.x += Math.PI/16;
			}
			else{
				scenes[i].children[0].rotation.x = 0;
			}
			if((scenes[i].children[0].rotation.y % 2*Math.PI)>0.5){
				scenes[i].children[0].rotation.y += Math.PI/16;
			}
			else{
				scenes[i].children[0].rotation.y = 0;
			}
		}

		renderers[i].render(scenes[i],scenes[i].userData.camera);
	}
	
}

var animate = function(){
	requestAnimationFrame(animate);
	render();

}

init();
animate();

// function onDocumentMouseMove(ev){
// 	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// 	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// }

function selectCube(cubeID){
	if(growCubeIndices.indexOf(cubeID-1)==-1){
		growCubeIndices.push(cubeID-1);
	}
	selectedIndex = cubeID-1;
	if(shrinkCubeIndices.indexOf(cubeID-1)!=-1){
		var i = shrinkCubeIndices.indexOf(cubeID-1);
		shrinkCubeIndices.splice(i,1);
	}
}

function deselectCube(cubeID){
	if(shrinkCubeIndices.indexOf(cubeID-1)==-1){
		shrinkCubeIndices.push(cubeID-1);
	}
	
	if(growCubeIndices.indexOf(cubeID-1)!=-1){
		var i = growCubeIndices.indexOf(cubeID-1);
		growCubeIndices.splice(i,1);
	}
	selectedIndex = currentIndex;
}
