//Базові задачі
//Завдання 1
/*function stringToArray(string) {
  return string.split(" ");
}*/

//Завдання 2
/*function DNAtoRNA(dna) {
  result = "";
  
  for(let i = 0; i < dna.length; i++)
    {
      if(dna[i] === "T")
        {
          result += "U";
        }
      else
        {
          result += dna[i];
        }
    }
  
  return result;
}
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replaceAll("T", "U");
}*/

//Поглиблені задачі
//Завдання 3
/*var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};*/

//Завдання 4
/*function min(arr, toReturn) {
  let minValue = Math.min(...arr);

  if (toReturn == "value") {
    return minValue;
  } else {
    return arr.indexOf(minValue);
  }
}

function min(arr, toReturn) {
  let minValue = arr[0];
  let indexMinValue = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      indexMinValue = i;
    }
  }

  if (toReturn === "value") {
    return minValue;
  } else {
    return indexMinValue;
  }
}*/

//Додаткові завдання
//Завдання 5
/*function doubleInteger(i) {
  return i * 2;
}*/

//Завдання 6

