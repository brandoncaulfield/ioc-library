import { Dependencies } from "../src";

const object: any = new Dependencies();

console.log(object.Api.get());

console.log(object.Db.getItem("123abc"));
