var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!

var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!

var isCool = people.filter(function(person){
  return person.coolnessScore < 23;
})
console.log(isCool);


// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

// var isCool = function(person) {
// 	return person.coolnessScore > 20;
// }

// Example results:
//
// Bob is cool
// Isolde is cool


// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

var isCool = function(person) {
	return person.coolnessScore > 20;
}

// Example results:
//
// Bob is cool
// Isolde is cool


///CREATE NEW ARRAY WITH ALL EVEN NUMBERED NAMES
  // var dudes = ['tanner', 'keanu', 'fabian', 'yadier'];
  // //OLD WAY
  // // var arr = [];
  // // for(var i = 0; i < dudes.length; i++){
  // //   if(dudes[i].length % 2 === 0)
  // //   arr.push(dudes[i]);
  // // console.log(arr);
  // // }
  // //NEW WAY
  // var evenLengthNames = dudes.filter(function(bros){
  //   return bros.length % 2 === 0;
  // })
  // console.log(evenLengthNames);