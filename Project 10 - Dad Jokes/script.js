const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

    const response = await fetch("https://icanhazdadjoke.com/", config)
    
    const data = await response.json()

    jokeEl.innerHTML = data.joke  
    
}

//using above the async await featuer instead of .then when doing a GET fetch.  Below is the .then method

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
