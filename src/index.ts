/**
 * Returns a function that adds classes/ or objects to a class's prototype.
 */

export function Inject(modules: {}[]) {
  /**
   * TODO: target param is currently untyped but will need to be properly typed
   * to ensure only relevant objects are accepted and communicated.
   */
  return function (target: any) {
    /**
     * TODO: Add relevant type(s) and setup tests to ensure "module" param is
     * correct for prototype assignment.
     */
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
