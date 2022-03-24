import { Inject } from "../index";

describe("Sanity Check", () => {
  test("1 + 1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("Injection tests", () => {
  test("class injection", () => {
    class Engine {
      engineCapacity: string;
      constructor() {
        this.engineCapacity = "2.0L";
      }
      getEngineCapacity() {
        return this.engineCapacity;
      }
    }

    @Inject([Engine])
    class Car {
      Engine: any;
      Wheels: any;
      model: string | undefined;
      constructor(model: string) {
        this.model = model;
      }
    }

    const mercedes = new Car("mercedes");
    expect(mercedes.Engine.engineCapacity).toBe("2.0L");
  });
  test("object injection", () => {
    class Wheels {
      wheelCount: number | undefined;
      constructor() {
        this.wheelCount = 4;
      }
      getWheels() {
        return this.wheelCount;
      }
    }

    @Inject([new Wheels()])
    class Car {
      Engine: any;
      Wheels: any;
      model: string | undefined;
      constructor(model: string) {
        this.model = model;
      }
    }

    const mercedes = new Car("mercedes");
    expect(mercedes.Wheels.wheelCount).toBe(4);
  });
});
