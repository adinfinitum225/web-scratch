var hexagon = new Path.RegularPolygon(new Point(50, 50), 6, 25);
hexagon.fillColor = 'blue';
hexagon.strokeColor = 'black';
var growthRate;

function onFrame(event) {
	if (hexagon.radius > 50) {
		growthRate = -3;
	}
	if (hexagon.radius < 15) {
		growthRate = 3;
	}
	hexagon.radius += growthRate;
}
