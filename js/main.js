(() => {
    const moviebox = document.querySelector("#movie-box");
    const reviewtemplate = document.querySelector("#review-template");
    const reviewCon = document.querySelector("#review-con");
    const baseUrl = 'https://search.imdbot.workers.dev/';
  
    function getMovies() {
      fetch(`${baseUrl}?q=thor`)
        .then(response => response.json())
        .then(function (response) {
          const movies = response.description;
          const ul = document.createElement('ul');
          movies.forEach(movie => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const img = document.createElement('img'); // Add image element
  
            a.textContent = movie['#TITLE'];
            a.dataset.review = movie['#IMDB_ID'];
  
            // Set up image source dynamically
            img.src = `images/${movie['#IMDB_ID']}.jpg`; // Assuming your images are named with IMDB_ID
  
            li.appendChild(a);
            li.appendChild(img); // Append the image to the list item
  
            ul.appendChild(li);
          });
  
          moviebox.appendChild(ul);
        })
        .then(function () {
          const links = document.querySelectorAll('#movie-box li a');
          links.forEach(link => {
            link.addEventListener("click", getReview);
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    function getReview(e) {
      const reviewID = e.currentTarget.dataset.review;
  
      fetch(`${baseUrl}?tt=${reviewID}`)
        .then(response => response.json())
        .then(function (response) {
          reviewCon.innerHTML = "";
  
          const template = document.importNode(reviewtemplate.content, true);
  
          const reviewBody = template.querySelector(".review-description");
          reviewBody.innerHTML = response.short.review.reviewBody;
  
          reviewCon.appendChild(template);
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    getMovies();
  })();
  