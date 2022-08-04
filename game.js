let height = window.innerHeight;
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
loadSprite("paddle", "paddle.png");
loadSprite("ball", "ball.png");

const paddle = add([
	sprite("paddle"),
	scale(0.2, 0.2),
	body(),
	solid(),
	area(),
	pos(100, 100),
	"paddle",
	// origin(0, 0),
]);

paddle.onUpdate(() => {
	//updates
});
add([sprite("floor"), scale(1000, 10), pos(0, height), solid(), area()]);
const wall = add([
	sprite("wall"),
	scale(1, 8.5),
	pos(0, -height),
	solid(),
	area(),
	"wall",
]);

onKeyPress("enter", () => {
	bgMusic.play();
});

onKeyDown("down", () => {
	move((paddle.pos.y += SPEED * dt()));
	cleanup();
});
onKeyDown("up", () => {
	move((paddle.pos.y -= SPEED * dt()));
	cleanup();
});
