# IOC (Inversion of Control) library

## How to use this library

Use the Dependency class in your application to access the dependencies specified in the library.

## What is IOC "Inversion of control"?

Inverasion of control is a programming concept where flow of control (execution of statements) is handled externally to your application code.

## What does this IOC library do exactly?

This Ioc (Inversion of Control) library provides a way to pass (inject) dependencies through a class instead of declaring them inside your application code. In this library it will be achieved via dependency injection.

## Why dependency injection?

Dependency injection (a form of "inversion of control") is a way to decouple your JavaScript dependencies from your app code and configure them in a separate place. If you need to "rewire" these dependencies you can do so using this IOC library, rather than directly in what can become very complex application code.

It also supports the "separation of concerns" principle meaning you separate the resolution of your dependencies from the actual "use" of them in your app.

Dependencies can be external libraries or code you've written yourself such as API or database calls. These dependencies might also rely on one another to work and dependency injection (inversion) allows you to abstract the logic needed for circular dependencies to a dedicated library like this one.

## Needs to have support for - Missing

- Circular dependencies - dependencies that rely on one another to work
- it is okay to support only transient objects and classes (no constants, functions and other types).
