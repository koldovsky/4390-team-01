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

/*class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}
function circleCircumference(circle) {
  let circleLength = 2 * Math.PI * circle.radius;
  let rounded = circleLength.toFixed(6);
  return Number(rounded);
}*/

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
