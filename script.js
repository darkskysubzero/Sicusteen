const title = document.querySelector('.title');
const img = document.querySelector('img');
const btn = document.querySelector('.btn');

const url = "https://meme-api.com/gimme"; 



const getMeme = ()=>{
    
 
    const makeRequest = async function(){
 
        const response = await fetch(url);
        const data = await response.json(); 
        title.innerHTML = data.title;
        img.src=data.url; 
    }

    makeRequest();

}

window.addEventListener("load",getMeme);


btn.addEventListener('click',getMeme);