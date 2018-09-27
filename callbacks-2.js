function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
    if (element === "Waldo") {
      found(array);
    }
  });
}

function actionWhenFound(indexOfWaldo) {
  console.log(`Found Waldo at index ${indexOfWaldo}`);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
