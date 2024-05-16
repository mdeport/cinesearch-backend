import Movie from "../models/movie.js";

export const getMovies = (req, res) => {
  Movie.find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};
