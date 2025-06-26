const user = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 }
]

const sortingByAge = require('../index.js');

test("test sorted user first element", () => {
    expect(sortingByAge(user)[0].name).toBe("Jane");
})

test("test sorted user second elemnt", () => {
    expect(sortingByAge(user)[2].name).toBe("Doe");
})


