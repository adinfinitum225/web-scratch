var hexagon = new Path.RegularPolygon(new Point(50, 50), 6, 25);
hexagon.fillColor = 'blue';
hexagon.strokeColor = 'black';

var text = new PointText(new Point(50, 100));
text.content = hexagon.rotation;
var growthRate = 0.99;

function onFrame(event) {
		hexagon.fillColor.hue += 1;
		hexagon.rotate(1);
		text.content = hexagon.bounds.width;
		if (hexagon.bounds.width > 50) {
				growthRate = 0.99;
		}
		if (hexagon.bounds.width < 25) {
				growthRate = 1.01;
		}
		hexagon.scale(growthRate);
}
