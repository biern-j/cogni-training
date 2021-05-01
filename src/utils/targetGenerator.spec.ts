import { targetGenerator } from "./targetGenerator";

// test("Shoud return empty list", () =>{
//     expect(targetGenerator(2, 5)).toEqual(["11"]);
// });

test("Shoud return list with one target", () =>{
    const result = targetGenerator(2, 5);
    expect(result.length).toBe(5);
});
// Frist Soluton
// test("Shoud return list with target which is string of numbers", () =>{
//     const result = targetGenerator(2, 5);
//     result.forEach((item: string) => {
//         const itemToNumer = Number(item);

//         console.log("result", itemToNumer);

//         expect(itemToNumer).not.toBeNaN();
//     });
// });

// Second Solution
test("Shoud return list with target which is string of numbers", () =>{
    const result = targetGenerator(2, 5);
    result.forEach((item: string) => {
        expect(item).toMatch(/^[0-9]*$/);
    });
});

test("Shoud check each targets' length by provided target lenght arg.", () =>{
    const result = targetGenerator(2, 5);
    result.forEach((item: string) => {
        expect(item.length).toBe(2);
    });
});

test("Shoud check length of list of targets by provided training repetition arg.", () =>{
    const result = targetGenerator(2, 5);
    result.forEach((item: string) => {
        expect(item.length).toBe(2);
    });
})

