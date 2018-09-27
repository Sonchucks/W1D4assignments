var words = ["ground", "control", "to", "major", "tom"];
var output = [];

function map(arr, find) {
  arr.forEach(function(element) {
    output.push(find(element));
  });
  console.log(output);
}

map(words, function(word) {
  return word.length;
});


// [6, 7, 2, 5, 3]


map(words, function(word) {
  return word.toUpperCase();
});


// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]




map(words, function(word) {
  return word.split('').reverse().join('');
});

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]


