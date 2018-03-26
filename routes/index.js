var express= require("express");
var router = express.Router();
var moviesJSON=require("../movies.json");


router.get("/", function(req,res){
    var movies = moviesJSON.movies;
    res.render("home", {
        title: "Star Wars Movies",
        movies: movies
    });
});
router.get("/star_wars_episode/:episode_number?", function(req, res){
   var episode_number=req.params.episode_number;
   var movies = moviesJSON.movies;
   if(episode_number >= 1 && episode_number <= 6){
   var movie=movies[episode_number - 1]
   var title= movie.title;
   var main_characters = movie.main_characters;
  res.render("movie_single", 
    { 
      movies: movies, 
      title: title,
      movie: movie,
      main_characters: main_characters
    })
   } else {
       res.render("notFound", {
           movies: movies, 
           title:"this is not the page you are looking for"})
   }
    
});

// for not found pages (the order matters)
router.get("*", function(req, res){
    var movies= moviesJSON.movies;
    res.render("notFound", {
        movies: movies,
        title: "This is not the page you are looking for"
    });
});
module.exports= router;