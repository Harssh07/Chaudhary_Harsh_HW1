document.addEventListener("DOMContentLoaded", () => {

    const characterList = document.getElementById("character-list");
    const movieInfo = document.getElementById("movie-info");
    const movieTitle = document.getElementById("movie-title");
    const openingCrawl = document.getElementById("opening-crawl");
    const moviePoster = document.getElementById("movie-poster");
    const baseUrl = "https://swapi.dev/api/";
  
    // Function to make AJAX call to SWAPI for movie details
    const getMovieDetails = async (movieUrl) => {
      try {
        const response = await fetch(movieUrl);
        const data = await response.json();
  
        // Update movie information on the page
        movieTitle.textContent = data.title;
        openingCrawl.textContent = data.opening_crawl;
  
        // Extract episode ID from the movie URL
        const episodeId = movieUrl.split("/")[5];
        moviePoster.src = `images/img-${episodeId}.jpg`;
  
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
  
    // Function to make AJAX call to SWAPI for character details
    const getCharacterDetails = async (characterUrl) => {
      try {
        const response = await fetch(characterUrl);
        const data = await response.json();
  
        // Log movie URL before making the getMovieDetails call
        console.log("Movie URL:", data.films[0]);
  
        // Create a list item for each character
        const listItem = document.createElement("li");
        listItem.textContent = data.name;
  
        // Add a click event to each character link
        listItem.addEventListener("click", () => {
          // Make an AJAX call to get movie details when character link is clicked
          getMovieDetails(data.films[0]); // Assuming the character is in the first film
          // Show the movie information section
          movieInfo.style.display = "block";
        });
  
        // Append the list item to the character list
        characterList.appendChild(listItem);
  
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };
  
    // Make an initial AJAX call to SWAPI to get a list of characters
    const getCharacters = async () => {
      try {
        const response = await fetch(`${baseUrl}people/`);
        const data = await response.json();
  
        // Loop through each character and get details
        for (const character of data.results) {
          await getCharacterDetails(character.url);
        }
  
      } catch (error) {
        console.error("Error fetching character list:", error);
      }
    };
  
    // Initial call to get characters
    getCharacters();
  
  });
  