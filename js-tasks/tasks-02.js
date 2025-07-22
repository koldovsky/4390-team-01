//Fedir Komarovskyi
//Базові задачі
//Завдання 1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}
//Завдання 1 https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
//DeinekaAndrii
function stringToArray(string) {
   return (string.match(/[а-яёa-zієїґ0-9’']+/gi) || []);
}

//Завдання 2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
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
}

//Завдання 2 https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
//DeinekaAndrii
function DNAtoRNA(dna) {
  return dna.replaceAll(/T/g, 'U');
}

//Поглиблені задачі
//Завдання 3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

//Поглиблені задачі
//Завдання 3 https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//DeinekaAndrii
var min = function(list){
    const minValue = Math.min(...list);
    return minValue;
}

var max = function(list){
    const maxValue = Math.max(...list);
    return maxValue;
}

//Завдання 4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
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
}

//Завдання 4 https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
//DeinekaAndrii
function min(arr, toReturn) { 
  const minValue = Math.min(...arr);
  const indexOfMinValue = arr.indexOf(minValue);
  if(toReturn === "value") return minValue;
  if(toReturn === "index") return indexOfMinValue;
}

//Додаткові завдання
//Завдання 5 https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  return i * 2;
}

//Завдання 6
//End code Fedir

https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){

  let words=string.split(" ");
  return words;
	// code code code

}
https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
 return dna.replaceAll("T","U"); 
  
  // create a function which returns an RNA sequence from the given DNA sequence
}
https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
  list.sort((a,b)=>a-b);
    return list[0];
}
var max = function(list){
  list.sort((a,b)=>b-a);
    return list[0];
}
https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) { 
  let min =Math.min(...arr);
  if(toReturn==="value"){
    return min;
  }else if(toReturn==="index"){
    return arr.indexOf(min);
  }
    
}
https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}
https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const age = Math.abs(dadYearsOld- (sonYearsOld * 2));
console.log(age);
  return age;
  // your code here
  
}
https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n){
return (n-1)*2;

}
https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s){
  
  return (h*3600*1000)+(m*60*1000)+(s*1000);
  //#Happy Coding! ^_^
}
https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
if(n%x===0 && n%y===0){
  return true;}
  else{
    return false;
  }
}
https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
 if(n<0){
   return n;
 }else if(n===1||n===0){
   return 0;
 }
  else if(n>=2&&n<=12){
    return n-1;
  }else if(n>=13){
    return n-2;
  }
}

//mykola dron
// не зовсім зрозумів як це робити - але ось завдання з codewars
//1
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
//2
function stringToArray(str) {
  return str.split(' ');
}

