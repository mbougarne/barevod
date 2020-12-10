import { CATEGORY_MOVIES_FETCHING } from '../types';

export const fetchMovies = () => async (dispatch, getState) => {
  let { categories } = getState();
  let movies = [];
  for (let cat of categories)
  {
    let res = await fetch(`https://sample-movie-api.web.app/movies?category=${cat.filter}`);
    let { data } = await res.json();
    movies[cat.filter] = data
  }

  return dispatch({
    type: CATEGORY_MOVIES_FETCHING,
    payload: {
      movies
    }
  })
}
