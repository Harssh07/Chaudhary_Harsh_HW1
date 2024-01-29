(() => {
    const moviebox = document.querySelector("#movie-box");
    const reviewtemplate = document.querySelector("#review-template");
    const reviewCon = document.querySelector("#review-con");
    const baseUrl = 'https://search.imdbot.workers.dev/';
  
    function getMovies() {
      fetch(`${baseUrl}?q=thor`)
        .then(response => response.json())
        .then(function(response) {
          
          console.log(response);
  
           const movies = response.description;
          const ul = document.createElement('ul');
          movies.forEach(movie => {
           // console.log(movie['#TITLE']);
           // console.log(movie['#IMDB_ID']); // Fixed typo here
  
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = movie['#TITLE']; // Fixed typo here
            
            
            a.dataset.review = movie['#IMDB_ID'];
            
            li.appendChild(a);


            ul.appendChild(li);
          });
  
          moviebox.appendChild(ul);
        })

.then(function(){
    const links = document.querySelectorAll('#movie-box li a');
    links.forEach(link => {
        link.addEventListener("click", getReview);
    })
})


        .catch(error => {
            console.log(error);
            //ideallt we would write to the dom and let user know something is wrong
        });
    }
  




function getReview (e) {
   // console.log("getReview Called");
  // console.log(this.dataset.review);
  // console.log(e.currentTarget.dataset.review); THERE IS ERROR IN THIS LINE OF CODE

  const reviewID = e.currentTarget.dataset.review;


fetch(`${baseUrl}?tt=${reviewID}`)

.then(response => response.json())

.then(function(response){

    
    reviewCon.innerHTML = "";
    
    console.log(response.short.review.reviewBody);

    const template = document.importNode(reviewtemplate.content,true);

    const reviewBody = template.querySelector(".review-description");

reviewBody.innerHTML = response.short.review.reviewBody;


reviewCon.appendChild(template); 

})

.catch(error => {
    console.log(error);
})

}




    getMovies();
  })();
  