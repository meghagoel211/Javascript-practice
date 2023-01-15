console.log("ajax tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler );

function buttonClickHandler()
{
    console.log('you have clicked the btn fetchBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //Open the object
    xhr.open('POST', 'https://api.instantwebtools.net/v1/airlines', true);
    xhr.getResponseHeader('Content-type', 'application/json')

    

    //what to do on progress - spinner/loader (optional)
    xhr.onprogress = function(){
        console.log('in progress');
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText)
        }
        else{
            console.log("Some error occured");
        }
    }

    params = `{
        "id": 212,
        "name": "New Airways",
        "country": "Sri Lanka",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
        "slogan": "From Sri Lanka",
        "head_quaters": "Katunayake, Sri Lanka",
        "website": "www.srilankaairways.com",
        "established": "1990"
    }`;
    
    xhr.send(params);

    //xhr.send();

    console.log("We are done!");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler()
{
    console.log('you have clicked the btn popBtn');
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    xhr.open('GET', 'https://dummyjson.com/products', true);

    

    //what to do on progress - spinner/loader (optional)
    xhr.onprogress = function(){
        console.log('in progress');
    }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.response);
            //let obj = this.response;
            console.log("obj:"+  obj);
            let list = document.getElementById('list');
            str="";
            for (key in obj)
            {
                console.log("key:"+ obj[key]);
                str += `<li>${obj[key].products}</li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured");
        }
    }

    
    xhr.send();

    console.log("We are done fetching employeess!");
}

