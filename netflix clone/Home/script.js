


function signinPage(){
  window.location.href =" /SignIn/signIn.html"
}




var favChannels = [
    { img_url: "/home/img/channels/Discovery.jpg" },
    { img_url: "/home/img/channels/Docubay.jpg" },
    { img_url: "/home/img/channels/Erosnow.jpg" },
    { img_url: "/home/img/channels/Hayu.jpg" },
    { img_url: "/home/img/channels/hoichoi.jpg" },
    { img_url: "/home/img/channels/LionsgatePlay.jpg" },
    { img_url: "/home/img/channels/MANORAMAMAX.jpg" },
    { img_url: "/home/img/channels/Mubi.jpg" },
    { img_url: "/home/img/channels/ShortsTv.jpg" }
]; // ✅ <-- Closing bracket added here

favChannels.map(function (elem) {
    var div = document.createElement("div");
    div.setAttribute("class", "channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));


// experimenting something 

// Function for Sign In page navigation
function signinPage() {
    window.location.href = "SignIn/signIn.html";
}

// Your API key
const API_KEY = "100c8b47835a07d275cb97de6eee64b4";

// Base URLs
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"; // For images
const MOVIE_PAGE = "https://www.themoviedb.org/movie/"; // For clickable link

// Container for movies - make sure this div id exists in your HTML
const main = document.getElementById("movies-container");

// Fetch movies from API
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    showMovies(data.results.slice(0, 10)); // Show only first 10 movies
  })
  .catch((err) => {
    console.error("Error fetching movies:", err);
  });

// Function to display movies on the page
function showMovies(movies) {
  main.innerHTML = ""; // Clear container before adding new movies

  movies.forEach((movie) => {
    const { title, poster_path, id } = movie;

    // Create movie div
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <a href="${MOVIE_PAGE + id}" target="_blank" rel="noopener noreferrer">
        <img src="${poster_path ? IMAGE_PATH + poster_path : 'fallback.jpg'}" alt="${title}" />
        <h3>${title}</h3>
      </a>
    `;

    main.appendChild(movieEl);
  });
}



// experimenting something 