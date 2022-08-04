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

loadSprite("paddle", "paddle.png");
loadSprite("paddle2", "paddle.png");

loadSprite("ball", "ball.png");
const ball = add([
	sprite("ball"),
	scale(0.5),
	body(),
	solid(),
	area(),
	pos(120, 0),
	"ball",
	// origin(0, 0),
]);

const paddle = add([
	sprite("paddle"),
	scale(1),
	// body(),
	solid(),
	area(),
	pos(width * 0.025, height / 2),
	"paddle",
	// origin(0, 0),
]);

const paddle2 = add([
	sprite("paddle2"),
	scale(1),
	// body(),
	solid(),
	area(),
	pos(width * 0.9, height / 2),
	"paddle2",
	// origin(0, 0),
]);

paddle.onUpdate(() => {
	//updates
});
add([
	rect(width, 20),
	pos(0, height - 48),
	outline(4),
	area(),
	solid(),
	color(127, 200, 255),
]);

onKeyPress("enter", () => {
	bgMusic.play();
});

onKeyDown("up", () => {
	move((paddle2.pos.y -= SPEED * dt()));
	cleanup();
});
onKeyDown("down", () => {
	console.log(paddle);
	move((paddle2.pos.y += SPEED * dt()));
	cleanup();
});
onKeyDown("w", () => {
	move((paddle.pos.y -= SPEED * dt()));
	cleanup();
});
onKeyDown("s", () => {
	console.log(paddle);
	move((paddle.pos.y += SPEED * dt()));
	cleanup();
});

onCollide("ball", "paddle", () => {
	move((ball.pos.x += 75));
});
