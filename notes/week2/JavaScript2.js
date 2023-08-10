const numbers = [1, 2, 3, 4]

numbers.forEach((number) => {
    if (number > 3) {
        console.log(number + ">3");
    } else {
        console.log(number + "<=3");
    }
})

const peoples = [
    { 'name': 'TOM', 'age': 15 },
    { 'name': 'BRIAN', 'age': 16 },
    { 'name': 'CAT', 'age': 17 },
]

old_peoples = peoples.filter(people => {
    if (people.age >= 16) {
        return true;
    }
    else {
        return false;
    }
})
console.log(old_peoples.map(people => people.name))
console.log(old_peoples.map(people => people.age))

func = (people) => {
    console.log(people.name);
    console.log(people.age);
}
peoples.forEach(people => {
    func(people)
})