let height = window.innerHeight * 3;
let width = window.innerWidth;
let SPEED = 900;

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
	//updates
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

onKeyPress("enter", () => {
	bgMusic.play();
});

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
