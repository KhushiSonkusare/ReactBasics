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

function GetData(callback){
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");

    xmlHttpReq.onreadystatechange = function(){
        if(xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200){
            // The request is complete and was successful
            var response = xmlHttpReq.responseText;
            //console.log(response); // Log the response to the console
            callback(response); // Call the callback function with the response
        }
    }
    xmlHttpReq.send(); // actually places the async call


}