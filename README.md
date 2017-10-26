# Polyphonic Binaural Beats
Polyphonic Binaural Beats in javascript

## Conditions for the effect

### Sine waves
* Each independent channel must be perfectly tuned (perfect integer ratios)
* Left channel: integer multiples of the fundamental frequency
* Right channel: integer multiples of the (fundamental frequency + beat frequency) 
* The sine waves must be in-phase (start at the same time)

### Human
* Wear headphones

# Example

```javascript

// A beat of 4Hz
// with 200Hz fundamental
// with intervals of 2, 3, 4
// This plays in one ear: 400hz, 600hz, 800hz
// And the other ear: 408hz, 612hz, 816hz
set(4, 200, [2, 3, 4])

```

## FAQ

* How do I run this file? 
     - Paste the contents of the .js file into your browser console
