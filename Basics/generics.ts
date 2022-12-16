// Creating a function with Generic types

function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1!, obj2);
};

const mergedObj = merge({name: 'Niloy', age: 26}, {profession: 'Software Dev',
hobbies: ['Football', 'Driving', 'Music']});

console.log(mergedObj);
