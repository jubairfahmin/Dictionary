async function mean(word){
    let a = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    let response = []
    response = await a.json();
    const definitions = response[0].meanings[0].definitions;
    

 let lists = document.querySelector("ol")
 
 for (let definition of definitions){
    
         list = document.createElement("li");
         list.innerText = definition.definition;
         lists.append(list);
     
 }

  
}



async function getMean(word){
let input = document.querySelector("input");
let lists = document.querySelector("ol")
let wordQuery = document.querySelector("span");
let reload = document.querySelector(".reload");
    let btn = document.querySelector("button");
    btn.addEventListener("click",()=>{
     lists.textContent="";
        var word = input.value;
    
        wordQuery.innerText = input.value;
        mean(word);
        reload.style.opacity="1";
       
    })
 
 input.addEventListener("keydown",()=>{
        if(event.key === "Enter"){
            lists.textContent="";
        var word = input.value;
    
        wordQuery.innerText = input.value;
        mean(word);
        reload.style.opacity="1";
        }
        
    })
       
    reload.addEventListener("click",()=>{
        input.value = "";
        wordQuery.textContent =  "";
        let lists = document.querySelector("ol")
        lists.textContent = "";
        reload.style.opacity= "0"
        
    })
}

getMean();

