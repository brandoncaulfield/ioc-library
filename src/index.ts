/**
 * Inject function that adds new classes or objects to a class's prototype (as dependencies)
 * @param modules
 * @returns
 */

export function Inject(modules: any) {
  return function (target: any) {
    modules.forEach((module: any) => {
      // Ifit's an instanitated class object just add it as a dependency
      // console.log(`${module}: ${typeof module}`);
      if (typeof module === "object") {
        debugger;
        target.prototype[module.constructor.name] = module;
        // If the class is not instantiated yet, intantiate it before adding it as a dependency
      } else if (typeof module === "function") {
        target.prototype[module.name] = new module();
      }
    });
  };
}
