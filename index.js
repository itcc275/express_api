const Users = [
    {
        name: 'John Doe',
        age: 30,
    },
    {
        name: 'Jane Smith',
        age: 25,
    },
    {
        name: 'Alice Johnson',
        age: 28,
    },
    {
        name: 'Bob Brown',
        age: 35,
    },
    {
        name: 'Charlie White',
        age: 22,
    }
]

function sortingByAge(Users) {
    return Users.sort((a, b) => {
        return a.age - b.age
    })
}


module.exports = sortingByAge



