 let buttonClick = document.getElementById('fetch-button');
let factArea = document.getElementById('fact-container');


const getFact = async ()=>{

    const response = await fetch('https://cat-fact.herokuapp.com/facts/random');

    if(response.status !== 200){
        throw new Error('cannot fetch data');
    } 
    const data = await response.json();
    factArea.textContent = data.text;
}   


const clickafter = ()=>{
    getFact().catch(err=>{
   
        factArea.textContent = err.message;
    })
}
buttonClick.addEventListener('click',clickafter);






