const button=document.querySelector(".container .btn");
const memetitle=document.querySelector(".container .title");
const img=document.querySelector(".container img");
const memeauthor=document.querySelector(".container .meme-author")
const updatedetails=(url, title, author) =>{
    img.setAttribute("src",url)
    memetitle.innerHTML= title;
    memeauthor.innerHTML=author;


}
const generatememe=() =>{
    
    .then(data => {
        updatedetails(data.url, data.title, data.author)

    })
};






button.addEventListener("click",generatememe)