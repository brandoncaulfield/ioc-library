import { Inject } from "../src";

class Engine {
  engineCapacity: string;
  constructor() {
    this.engineCapacity = "2.0L";
  }
  getEngineCapacity() {
    return this.engineCapacity;
  }
}

class Wheels {
  wheelCount: number | undefined;
  constructor() {
    this.wheelCount = 4;
  }
  getWheels() {
    return this.wheelCount;
  }
}

@Inject([Engine, new Wheels()])
class Car {
  Engine: any;
  Wheels: any;
  model: string | undefined;
  constructor(model: string) {
    this.model = model;
  }
}

const mercedes = new Car("mercedes");

console.log(
  mercedes.model,
  mercedes.Engine.engineCapacity,
  mercedes.Wheels.wheelCount
);
