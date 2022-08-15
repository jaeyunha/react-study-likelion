let movies = [
  {
    id: 1,
    title: "movie1",
    director: "director1",
    category: "category1",
    detail: "detail1",
  },
  {
    id: 2,
    title: "movie2",
    director: "director2",
    category: "category2",
    detail: "detail2",
  },
  {
    id: 3,
    title: "movie3",
    director: "director3",
    category: "category3",
    detail: "detail3",
  },
  {
    id: 4,
    title: "movie4",
    director: "director4",
    category: "category4",
    detail: "detail4",
  },
  {
    id: 5,
    title: "movie5",
    director: "director5",
    category: "category5",
    detail: "detail5",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((movie) => movie.id === id);
}
