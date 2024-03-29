# Chaudhary_Harsh_HW1
## Star Wars Character/Movie Guide
### overview
#### This project utilizes the Star Wars API (SWAPI) to create a responsive character/movie guide. The guide displays a list of Star Wars characters with each character's name acting as a link to the movies they appeared in. When a character link is clicked, an AJAX call retrieves and displays information about the movie, including the title, opening crawl, and movie poster.
### Features:

1.Utilizes SWAPI to access Star Wars character and movie data.

2.Responsive design from mobile to desktop using HTML Template element and template literals.

3.GreenSock enhancements for smooth animations and transitions.

4.Separate AJAX call/function for each character to retrieve movie details.

5.Graceful handling of AJAX request stages, including success and failure.

6.Loading icon to indicate content is being loaded.

### Implemention:
#### 1.Character list:
-Displays an unordered list of 10 or more characters.

-Each list item contains a character name acting as a link to the movies they were in.

#### 2.Movie details:
-Separate section displays movie title, opening crawl, and movie poster upon clicking a character link.

-Movie poster images sourced and stored in the "images" folder.

#### 3.REsponsive design:
-Responsive layout ensures a seamless experience from mobile to desktop.

#### 4.  Greensock enhancements:
- Utilizes GreenSock for enhanced animations and transitions.

#### 5.AJAX request handling:
-Separate functions/handlers for each stage of an AJAX request (loading, success, failure).

-Graceful handling of potential failures in the AJAX request process.
