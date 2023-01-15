console.log("This is tut 43");

async function f1(){
    console.log("Inside f1 function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("users resolved");
    return users
}

console.log("Before calling f1");
let a = f1();
console.log("After calling f1");
console.log(a);
a.then(data=> console.log(data))
console.log("Last line of js file");