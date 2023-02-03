function calculateTheAverage(...persons) {
    // console.log(persons);
    return Math.round(persons.reduce((prev, curr) => {
        return prev + curr.rating;
    }, 0) / persons.length * 100) /100;
}
let person1 = {name: 'name1', rating: 5.6}, person2 = {name: 'name2', rating: 7.5}, 
person3 = {name: 'name3', rating: 9.2};
let average = calculateTheAverage(person1,person2,person3);
console.log(`Average is: ${average}`);

