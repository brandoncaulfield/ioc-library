/**
 * Returns a function that adds classes/ or objects to a class's prototype.
 */

export function Inject(modules: {}[]) {
  return function (target: any) {
    modules.forEach((module: any) => {
      if (typeof module === "object") {
        // If it's an instanitated class object just add it as a dependency
        target.prototype[module.constructor.name] = module;
      } else if (typeof module === "function") {
        // If the class is not instantiated yet, intantiate it before adding it as a dependency
        target.prototype[module.name] = new module();
      }
    });
  };
}
