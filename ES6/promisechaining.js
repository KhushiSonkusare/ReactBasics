fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log('Then 1');
    return response.json();
})
.then(data => {
    console.log('Then 2');
})

// THIs keyword in old function to create a objject
function  emp(){
    this.salary = 29000000
    setTimeout(()=>{
        console.log(this);
    })
}

var emp1 = new emp();// this will print the emp object

//if arrow function isnt used it will print the global object
// arrow function binds the this keyword to the lexical scope

