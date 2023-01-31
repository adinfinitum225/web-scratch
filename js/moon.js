/*
var myCircle = new Path.Circle(new Point(100,70), 50);
myCircle.strokeColor = 'black';
myCircle.selected = true;

console.log(myCircle.segments[0].point);
myCircle.segments[0].point.set(x=100, y=70);
*/

/*
var myPath = new Path(new Point(0, 20), new Point(50, 70), new Point(0, 120));
myPath.strokeColor = 'black';
myPath.fullySelected = true;
myPath.smooth();
*/

/*
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
*/

var circum = new Path.Circle({
	center: [200, 200],
	radius: [100],
	strokeColor: 'black',
});

var dark = new Path.Arc({
	from: [200,100],
	through: [300,200],
	to: [200,300],
	strokeColor: 'black',
});
dark.arcTo(
	new Point(150, 200),
	new Point(200,100)
);
dark.fillColor = 'black';
dark.fullySelected= true;
console.log(dark.segments);
console.log(dark.segments[2].handleOut.angle);

// Maybe try two segments connected by curves with the proper angles based on longitutde



/*
var moon = new CompoundPath({
	children: [
		new Path.Circle({
			center: [400,400],
			radius: [100],
		}),
		new Path.Arc({
			from: [400,300],
			through: [450,400],
			to: [400,500],
		}),
	],
	strokeColor: 'black',
	selected: true,
});
*/



/*
var term = new Path.Arc({
	from: [200, 100],
	through: [275, 200],
	to: [200, 300],
	strokeColor: 'black',
	fullySelected: 'true',
});
*/

