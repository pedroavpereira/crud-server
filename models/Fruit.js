const fruits = require("../fruits.json");

class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static async showAll() {
    return fruits.map((fruit) => new Fruit(fruit));
  }

  static async show(name) {
    const fruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === name.toLowerCase()
    );
    if (!fruit) throw "Fruit not found";
    return new Fruit(fruit);
  }

  static async create(data) {
    if (
      fruits.some(
        (fruit) => fruit.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      throw "Fruit already exists";
    }

    fruits.push(data);
    return new Fruit(data);
  }

  async update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );

    if (!updatedFruit) throw "Fruit not found!";

    updatedFruit.genus = data?.genus || updatedFruit.genus;
    updatedFruit.name = data?.name || updatedFruit.name;
    updatedFruit.id = data?.id || updatedFruit.id;
    updatedFruit.family = data?.family || updatedFruit.family;
    updatedFruit.order = data?.order || updatedFruit.order;
    updatedFruit.nutritions = data?.nutritions || updatedFruit.nutritions;

    return new Fruit(updatedFruit);
  }

  async destroy() {
    const fruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );

    fruits.splice(fruits.indexOf(fruit), 1);
  }
}

module.exports = Fruit;
