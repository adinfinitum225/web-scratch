/*
var myCircle = new Path.Circle(new Point(100,70), 50);
myCircle.strokeColor = 'black';
myCircle.selected = true;

console.log(myCircle.segments[0].point);
myCircle.segments[0].point.set(x=100, y=70);
*/

var myPath = new Path(new Point(0, 20), new Point(50, 70), new Point(0, 120));
myPath.strokeColor = 'black';
myPath.fullySelected = true;
myPath.smooth();

var right = new Path.Arc({
	from: [100, 20],
	through: [150, 70],
	to: [100, 120],
	strokeColor: 'black',
});

var left = new Path.Arc({
	from: [100, 20],
	through: [50, 70],
	to: [100, 120],
	strokeColor: 'black',
});

var terminator = right.clone();
console.log(terminator.segments);
terminator.interpolate(right, left, 0.75);
