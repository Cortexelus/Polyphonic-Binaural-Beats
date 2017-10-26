
let ctx = new (window.AudioContext || window.webkitAudioContext)();

let b = 4 // beat in Hz
let intervals = [1, 2, 3]; // integer multiples of the fundamental
let f = 500 // fundamental frequency 

// Pan
let panNodes = [ctx.createStereoPanner(), ctx.createStereoPanner()]
panNodes[0].pan.value = -1;
panNodes[1].pan.value = 1;
panNodes[0].connect(ctx.destination);
panNodes[1].connect(ctx.destination);

// Oscillators
let oscillators = [];
for(let i=0; i<intervals.length*2; i++){
	let pan = i%2;
	let o = ctx.createOscillator();
	o.type = 'sine';
	let interval = intervals[Math.floor(i/2)]; 
	if(pan){
		o.frequency.value = (f + b) * interval;
	}else{
		o.frequency.value = (f + 0) * interval;
	}
	o.start();
	o.connect(panNodes[pan]);
	oscillators.push(o);
}

// Set the beat in Hz, the new fundamental frequency, and the new intervals (integer multiples)
function set(newb, newf, newintervals){
	b = newb
	intervals = newintervals
	//bottom_freq = new_bottom_freq
	//smallest_interval = Math.min.apply(null, newintervals); 
	//f = bottom_freq / smallest_interval
	f = newf
	console.log("Fundamental", f, "hz")
	console.log("Beat", b, "hz")

	for(let i=0; i<oscillators.length; i++){
		let pan = i%2;
		let interval = intervals[Math.floor(i/2)]; 
		o = oscillators[i]
		if(pan){
			o.frequency.value = (f + b) * interval 
		}else{
			o.frequency.value = (f + 0) * interval
		}
		console.log(i, o.frequency.value)
	}

}

// A beat of 4Hz
// with 200Hz fundamental
// with intervals of 2, 3, 4
// This plays in one ear: 400hz, 600hz, 800hz
// And the other ear: 408hz, 612hz, 816hz
set(4, 200, [2, 3, 4])
