# IOC (Inversion of Control) library

[![npm version](https://badge.fury.io/js/ioc-library-example-1.svg)](https://badge.fury.io/js/ioc-library-example-1)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/brandoncaulfield/ioc-library/issues)

## **Aim**

The aim of this library is to provide a simple and easy way to use dependency injection with minimal setup and or configuration that can be used specifically with TypeScript projects.

## **How to use this library**

**Step: 1**
Install the library

```
> npm install ioc-library-example-1
```

**Step: 2**
Import the Inject decorator into your application and use it as a class decorator to inject class and or objects into your main class as dependencies.

```
// app.ts

import { Inject } from "ioc-library-example-1";

@Inject([class, object])
class Car {}

```

**Full Example**

```
// app.ts

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

## **Problem we're trying to solve**

To avoid tightly coupled modules, functions and classes ensuring code maintainablilty and ease of testing.

## **Important Concepts**

### **What is a JavaScript decorator (Experimental)**

JavaScript [decorators](https://www.typescriptlang.org/docs/handbook/decorators.html) are currently in "[stage 2 Draft](https://tc39.es/proposal-decorators/)" which means they are a proposed change that's likely to go through and be implemented, but are still considered experimental. Decorators are made use of in this library to allow you to inject your dependencies into a class.

### **What is IOC "Inversion of control"?**

Inverasion of control is a programming concept where flow of control (execution of statements) is handled externally to your application code.

### **What does this IOC library do exactly?**

This Ioc (Inversion of Control) library provides a way to pass (inject) dependencies (classes, objects, etc...) through a function instead of declaring them inside your class.

### **Why dependency injection?**

Dependency injection (a form of "inversion of control") is a way to decouple your JavaScript dependencies from your app code and configure them separately. If you need to "rewire" or completely change these dependencies you can do so away from your application logic rather than directly in what can become very complex application code.

It also supports the "separation of concerns" principle meaning you separate the resolution (e.g., instantiating a class) of your dependencies from the actual "use" of them in your app.

## **Currently Supports**

- Transient Classes
- Transient Objects

## **Planned Support**

- Circular dependencies - dependencies that rely on one another to work
- Constants, functions and other types.

## **Potential Issues**

- Error: "exports is not defined in ES module scope" - **make sure you remove the "type": "module" from the package.json file.**
- error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning. - **Just a warning that decorators are still experimental. Add/ uncomment the option in your tsconfig file called "experimentalDecorators: true"**
