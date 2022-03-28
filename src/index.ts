/**
 *
 * TODO:
 * 1.
 */

/**
 * Inject function that adds new classes or objects to a class's prototype (as dependencies)
 * @param modules
 * @returns
 */

export function Inject(modules: any) {
  return function (target: any) {
    modules.forEach((module: any) => {
      // If it's an instanitated class object just add it as a dependency
      if (typeof module === "object") {
        debugger;
        target.prototype[module.constructor.name] = module;
      } else if (typeof module === "function") {
        // If the class is not instantiated yet, intantiate it before adding it as a dependency
        target.prototype[module.name] = new module();
      }
    });
  };
}
