async function getJoke () {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const completejson = await response.json();
    const joke = completejson.value;
    console.log(joke);
    document.getElementById('joke').innerHTML = joke;
}

getJoke();