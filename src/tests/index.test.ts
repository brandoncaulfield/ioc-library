import { Dependencies } from "../index";

test("class instantiates", () => {
  expect(new Dependencies()).toBeDefined();
});

test("dependencies loaded correctly", () => {
  const dependenciesObject = new Dependencies();
  expect(dependenciesObject.Api.get()).toBe(200);
  expect(dependenciesObject.Db.getItem("123abc")).toEqual({
    itemId: "123abc",
  });
});
