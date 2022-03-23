"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
test("class instantiates", () => {
    expect(new __1.Dependencies()).toBeDefined();
});
test("dependencies loaded correctly", () => {
    const dependenciesObject = new __1.Dependencies();
    expect(dependenciesObject.Api.get()).toBe(200);
    expect(dependenciesObject.Db.getItem("123abc")).toEqual({
        itemId: "123abc",
    });
});
