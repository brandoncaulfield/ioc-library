# IOC (Inversion of Control) library

## Aim

The aim of this library is to provide a simple and easy way to use dependency injection with minimal setup and or configuration that can be used with TypeScript projects.

## How to use this library

**Step: 1**
Install the library

```
> npm install ioc-library-example-1
```

**Step 2**
Import the Inject decorator into your application and use it as a class decorator to inject class and or objects into your main class as dependencies.

```

import { Inject } from "ioc-library-example-1";

@Inject([class, object])
class Car {}

```

**Full Example**

```

import { Inject } from "ioc-library-example-1";

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

```

See the Examples subdirectory for examples you can run immediately.

## Problem we're trying to solve

To avoid tightly coupled modules, functions and classes ensuring code maintainablilty and ease of testing.

## Important Concepts

### What is a dependency

A dependency is an object that another object depends on to run.

### What is IOC "Inversion of control"?

Inverasion of control is a programming concept where flow of control (execution of statements) is handled externally to your application code.

### What does this IOC library do exactly?

This Ioc (Inversion of Control) library provides a way to pass (inject) dependencies (classes, objects, etc...) through a function instead of declaring them inside your class.

### Why dependency injection?

Dependency injection (a form of "inversion of control") is a way to decouple your JavaScript dependencies from your app code and configure them separately. If you need to "rewire" or completely change these dependencies you can do so away from your application logic rather than directly in what can become very complex application code.

It also supports the "separation of concerns" principle meaning you separate the resolution (e.g., instantiating a class) of your dependencies from the actual "use" of them in your app.

### Currently Supports

- Transient Classes
- Transient Objects

### Planned support for

- Circular dependencies - dependencies that rely on one another to work
- Constants, functions and other types.

### Potential Issues

- Error: "exports is not defined in ES module scope" - make sure you remove the "type": "module" from the package.json file.
