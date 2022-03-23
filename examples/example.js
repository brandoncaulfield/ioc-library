"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const object = new src_1.Dependencies();
console.log(object.Api.get());
console.log(object.Db.getItem("123abc"));
