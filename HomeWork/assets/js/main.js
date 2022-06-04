//TASK 1
const user = {

};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
//console.log(user);
delete user.name;
console.log(user);

//TASK 2
const user2 = {

};
//user2.name = 'Ali';
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

console.log(isEmpty(user2));


//TASK 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function sumSalaries(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop];
    }
    return sum;
}
console.log(sumSalaries(salaries));

//TASK 4
const menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);

function multiplyNumeric(object) {
    for (let prop in object) {
        if (typeof object[prop] == 'number') {
            object[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu)
