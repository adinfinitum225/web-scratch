var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'black'
});

function onFrame(event) {
	path.rotate(3);
}
