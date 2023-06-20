    let buttonClick = document.getElementById('fetch-button');
    let factArea = document.getElementById('fact-container');
    let removeButton = document.getElementById('remove-button');

      const getFact = async ()=>{

        try{
        const response = await fetch('https://cat-fact.herokuapp.com/facts/random');

        if (response.status !== 200) {
            throw new Error('cannot fetch data');
        }
        const data = await response.json();
        factArea.textContent = data.text;
         }
        catch(err){
            factArea.textContent = err.message;
        }}
      

    buttonClick.addEventListener('click',getFact);



    
    const clearBox = ()=>{
        factArea.textContent = '';
    }
    removeButton.addEventListener('click',clearBox);

        
            










