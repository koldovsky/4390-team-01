https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
 let array=[];
  for(let key in obj){
    if(key.length  ===5){
      array.push(key); 
    }
  let value = obj[key];
    if(value.length ===5 && typeof value==='string')
    {
      array.push(value);
    }
  }
  return array;
}