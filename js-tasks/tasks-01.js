// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  }
  return "No";
}

//Andrii Les
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  let result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return result;
  //просто додаємо всі голи
}
function makeNegative(num) {
  // Code?
  return num > 0 ? -num : num; // якщо число більше нуля, то повертаємо його від'ємне значення,
  // а якщо менше або дорівнює нулю, то повертаємо таке як є
}
function move(position, roll) {
  return position + roll * 2;
  // return the new position
}
function greet(name, owner) {
  // Add code here
  return name === owner
    ? "Hello boss"
    : "Hello guest"; //якщо нейм і овнер однакові тоді привіт бос 
   //інакше привіт гість
}
function litres(time) {
  return Math.floor(time * 0.5); //заокруглення до меншого цілого числа
}
function lovefunc(flower1, flower2) {
  // moment of truth

  return (flower1 %2) !== (flower2%2) ? true : false; //якщо не парні тоді любов,якщо ні тоді немає любові
}




//Fedir Komarovskyi
//Завдання 1
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Завдання 2
function makeNegative(num) {
  //if (num > 0)
    //{
      //return -num;
    //}
  //else
    //{
      //return num;
    //}
  //return num <= 0 ? num : -num;
  return -Math.abs(num);
}
//Завдання 3
function move(position, roll) {
  // return the new position
  return position + 2 * roll;
}

//Завдання 4
function greet(name, owner) {
  /*if(name === owner)
    {
      return 'Hello boss';
    }
  else
    {
      return 'Hello guest'
    }*/

  return name === owner ? "Hello boss" : "Hello guest";
}

//Завдання 5
function litres(time) {
  return Math.floor(time * 0.5);
}

//Завдання 6
function lovefunc(flower1, flower2) {
  return flower1 % 2 != flower2 % 2;
}
