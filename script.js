
const loadJokes = async () =>{
    const loadingState = document.getElementById('content');
    try{
        loadingState.innerHTML = "Loading joke for you..."
        const fetchJokes = await fetch('https://api.chucknorris.io/jokes/random',{
            headers : {
                Accept : 'application/json'
            }
        });
            
        const jokeData = await fetchJokes.json();
        document.getElementById('content').innerHTML = jokeData.value;
    } catch(error){
        console.log(error);
    }
   
}

document.getElementById('btn').addEventListener("click", loadJokes);