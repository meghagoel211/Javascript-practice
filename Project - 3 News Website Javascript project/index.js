console.log("This is website")

const country = "in";
const apiKey = "fe077bce3a4b439b9d751a4bedb9dd05";

//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles
        console.log(articles);
        let newsHtml ="";
        articles.forEach((element,index) => {
            let news = `
                        <div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b>Breaking News ${index}: </b>${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here</a> </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        
        newsAccordion.innerHTML = newsHtml;
    }
    
    else {
        console.log("Some error occured")
    }
}
xhr.send();

