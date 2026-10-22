const app = () => {
    const obj = [
        { name:'mehak',
        age: 22
        },
        {name:'sana',
        age: 23
        },
        {name:'saba',
        age: 24
        }
];

const arr = obj.map((person) => person);
console.log(arr);
}
app();


// map() is a function where I give it a function. In that function, I define what operation
//  I want to perform on each element,
//  person represents each element, and person.name tells it what value to obtain from that element."