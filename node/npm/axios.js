import axios from 'axios' // type: module in package.json -> es6 modules 

axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=> console.log(res.data));

// fs method allows you to read the content of the file
