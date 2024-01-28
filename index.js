let content = document.querySelector("#joke");
let btn = document.querySelector("#btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let GenerateJoke = function() {
    fetch(url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        content.textContent = data.joke;
        content.style.opacity = 1;
    })
    .catch(error => {
        console.error("Error fetching joke:", error); 
    });
}

btn.addEventListener("click", GenerateJoke);
