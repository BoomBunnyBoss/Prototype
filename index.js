function Organism() {}
Organism.prototype.isAlive = function() {
    return this.age > 110 ? false : true
};

function Creature() {}
Creature.prototype = Object.create(Organism.prototype);
Creature.prototype.constructor = Creature;
Creature.prototype.getAge = function () {
  return this.age;
};

function Person() {}
Person.prototype = Object.create( Creature.prototype );
Person.prototype.sayHi = function() {
    return `Hello, ${this.name}`; 
}

function Boy(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Boy.prototype = Object.create( Person.prototype );
Boy.prototype.getFavoriteColor = function () {
    return this.favoriteColor;
};

function Girl(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

Girl.prototype = Object.create(Person.prototype);
Girl.prototype.constructor = Girl;
Girl.prototype.getFavoriteColor = function () {
  return this.color;
};

const john = new Boy("John", 33, "Blue");
console.log(john.getAge()); // Вернет число возраста: 33
console.log(john.sayHi()); // Вернет текст приветсвия: "Hello, John"
console.log(john.isAlive()); // Вернет жив или нет boolean. В зависимости от возраста. Если больше 110 лет, то ответ: false
console.log(john.getFavoriteColor()); // текст: Blue;
console.log(john);

const Nastia = new Girl("Nastia", 21, "Black");

console.log(Nastia.getAge());
console.log(Nastia.sayHi());
console.log(Nastia.isAlive());
console.log(Nastia.getFavoriteColor());
console.log(Nastia);