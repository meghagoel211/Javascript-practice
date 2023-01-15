console.log("This is  tut 39");

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

// function getData(){
//     console.log("Started getData");
//     url = "../tut34/sample.txt";
//     fetch(url).then((response)=>{
//         console.log("Inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside second then");
//         console.log(data);
//     })
// }

function postData() {
    url = "https://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"tes334t","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data=> console.log(data))
}

// console.log("Before running getDAta");
// getData();
// console.log("after running getData");
postData();