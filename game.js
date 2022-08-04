let height = window.innerHeight * 3;
let width = window.innerWidth;
let SPEED = 900;

let DOUBLE_JUMP = JUMP_POWER * 1.5;

kaboom({
	width,
	height,
	font: "sinko",
	canvas: document.querySelector("gameCanvas"),
	background: [100, 200, 255],
});
// console.log(window.innerHeight);
loadRoot("./assets/");
loadSprite("player", "ogre.png");

const bgMusic = new Audio("/assets/bgmusic.mp3", {
	volume: 0.4,
	// loop: true,
});
const droplet = new Audio("/assets/droplet.wav", {
	volume: 0.8,
	// loop: true,
});
const whoosh = new Audio("/assets/whoosh.flac", {
	volume: 0.8,
	// loop: true,
});
const player = add([
	sprite("player"),
	scale(0.2, 0.2),
	body(),
	solid(),
	area(),
	pos(100, 100),
	"player",
	// origin(0, 0),
]);

player.onUpdate(() => {
	// center camera to player
	// camPos((currCam.y = player.pos.y - player.pos.y / 2));
	// camPos(player.pos.y + player.pos.y / 2, currCam.y);
	// camPos(player.pos.x + player.pos.x / 2, currCam.x);
	// camPos(player.pos.x - player.pos.x / 3, player.pos.y - player.pos.y / 3);
	// camPos((currCam.x = player.pos.x - player.pos.x / 2));
	// if (currCam.y > player.pos.y) {
	// 	camPos(player.pos.y, currCam.y);
	// }
	// if (currCam.y < player.pos.y) {
	// 	camPos(player.pos.y, currCam.y);
	// 	camPos(player.pos.x, currCam.x);
	// }
});
add([
	sprite("floor"),
	scale(1000, 10),
	pos(-1000, height - 50),
	solid(),
	area(),
]);
const wall = add([
	sprite("wall"),
	scale(1, 8.5),
	pos(-width / 2, -height),
	solid(),
	area(),
	"wall",
]);
// add([sprite("silver"), scale(0.5), pos(-150, height - 300), solid(), area()]);
// add([sprite("silver"), scale(0.5), pos(230, height - 500), solid(), area()]);
// add([sprite("silver"), scale(0.5), pos(600, height - 400), solid(), area()]);
// add([sprite("silver"), scale(0.5), pos(900, height - 900), solid(), area()]);

onKeyPress("enter", () => {
	bgMusic.play();
});

onKeyPress("space", () => {
	if (player.isGrounded()) {
		player.jump(JUMP_POWER);
		burp();
	}
});
console.log(player);
onKeyDown("v", () => {
	if (player.isGrounded()) {
		player.jump(DOUBLE_JUMP);
		whoosh.play();
	}
});

onKeyDown("right", () => {
	console.log(player);
	move((player.pos.x += SPEED * dt()));
	cleanup();
});
onKeyDown("left", () => {
	console.log(player);
	move((player.pos.x -= SPEED * dt()));
	cleanup();
});
