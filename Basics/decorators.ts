
function Logger(classType: string) {
    return function(constructor: Function) {
        console.log(`Logger for class: ${classType}`);
        console.log(constructor);
    }
}


@Logger('Person')
class Person {
    name = 'Niloy';

    constructor() {
        console.log('Constructor called');
    }
}