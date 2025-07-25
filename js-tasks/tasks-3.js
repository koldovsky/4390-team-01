//Федір Комаровський
//Задача 1 https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => 2 * Math.PI * circle.radius;

//Задача 2 https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  const arr = [];

  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }

    const value = obj[key];
    if (value.length === 5) {
      arr.push(value);
    }
  }

  return arr;
}

//Задача 3 https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n){

	const res = [];
  
	for (let i = 0; i< n; i++){
    let storedIndex = i;
		res.push(function(){
      console.log(storedIndex);
      return storedIndex;
		})
	}
	return res;
}

//Задача 4 https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce(){
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  introduce(){
    return super.introduce();
  }
  
  greetMaster(){
    return `Hello ${this.master}`;
  }
}



//www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

https: function giveMeFive(obj) {
  let array = [];
  for (let key in obj) {
    if (key.length === 5) {
      array.push(key);
    }
    let value = obj[key];
    if (value.length === 5 && typeof value === "string") {
      array.push(value);
    }
  }
  return array;
}



// Get Coding :)
https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

/*https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  let circleLength = 2 * Math.PI * circle.radius;
  let rounded = circleLength.toFixed(6);
  return Number(rounded);
}
console.log(new Circle(new Point(1,3),5))
*/

