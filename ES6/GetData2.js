// function GetData(){
//     var xmlHttpReq = new XMLHttpRequest();
//     xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

//     xmlHttpReq.onreadystatechange = function(){
//         if(xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200){
//             // The request is complete and was successful
//             var response = xmlHttpReq.responseText;
//             //console.log(response); // Log the response to the console
//             return response;
//         }
//     }
//     xmlHttpReq.send(); // actually places the async call


// } This doesnt return the data as expected because the function is asynchronous.

function GetData(){
    return new Promise(function(resolve, reject) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xmlHttpReq.onreadystatechange = function(){
        if(xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200){
            // The request is complete and was successful
            var response = xmlHttpReq.responseText;
            //console.log(response); // Log the response to the console
            resolve(response); // Call the callback function with the response
        }else if(xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200){
            reject(new Error("Request failed with status: " + xmlHttpReq.status));
        }
    }
    xmlHttpReq.send(); // actually places the async call


})
}