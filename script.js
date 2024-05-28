const apikey = "2ce499dabc4d493eb615327f30e6d67e";
const blogcontain = document.getElementById("Blog-container");

async function fetchRandomNews(){
    try{
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apikey=${apikey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.articles;
    }catch(error){
        console.error("There was an error in fetching random news",error);
        return [];
    }
}

(async ()=>{
    try{
        const articles = await fetchRandomNews();
        console.log(articles);
        displayBlogs(articles);
    }catch(error){
        console.error("Error Fetching news",error);
        return []
    };
})();

function displayBlogs(articles){
     blogcontain.innerHTML = "";
     articles.forEach((article)=>{
        const blogCard = document.createElement("div");
        blogCard.classList.add("container");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement("p");
        description.textContent = article.description;
        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogcontain.appendChild(blogCard);
     })

}

