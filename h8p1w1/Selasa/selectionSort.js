function selectionSort(array){
  var min = 0;
  var indexMin = 0;
  for(var i = 0; i < array.length; i++) {
    min = array[i];
    indexMin = i;
    for(var j = i; j < array.length; j++) {
      if(array[j] < min){
        min = array[j];
        indexMin = j;
      }
    }
    if(array[i] != array[indexMin]){
      console.log(array[i], array[indexMin]);
      var tempSwap = array[i];
      array[i] = array[indexMin];
      array[indexMin] = tempSwap;
    }
  }
  return array;
}

console.log(selectionSort([8, 5, 7, 1, 9, 3]));
console.log(selectionSort([33, 2, 52, 106, 73]));
