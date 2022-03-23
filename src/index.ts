import { Api } from "./dependencies/api";
import { Db } from "./dependencies/db";

function _Inject(modules: any) {
  return function (target: any) {
    debugger;
    modules.forEach((module: any) => {
      target.prototype[module.name] = new module();
    });
  };
}

// Static injection
@_Inject([Api, Db])
export class Dependencies {
  Api: any;
  Db: any;
  constructor() {}
}
