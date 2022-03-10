// alert("This Website is just a Fanpage");

async function getJoke () {
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    const completejson = await response.json();
    const joke = completejson.joke;
    console.log(joke);
    document.getElementById('joke').innerHTML = joke;
}

getJoke();