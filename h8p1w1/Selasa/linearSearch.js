function linearSearch(elemen, array){
  for(var i = 0; i < array.length; i++){
    if(elemen === array[i]){
      return i;
    }
  }
  return -1;
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];
console.log(linearSearch(18, random_numbers));
console.log(linearSearch(9, random_numbers));


function globalLinearSearch(elemen, array){
  var result = [];
  for(var i = 0; i < array.length; i++){
    if(elemen === array[i]){
      result.push(i);
    }
  }
  if(result.length){
    return result;
  } else {
    return -1;
  }
}

let banana_arr = 'banana'.split('');
console.log(globalLinearSearch('a', banana_arr));
