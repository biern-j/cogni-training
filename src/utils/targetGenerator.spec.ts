import { targetGenerator } from "./targetGenerator";

test("Shoud return list with targets", () =>{
    expect(targetGenerator()).toEqual(["123","456"]);
});