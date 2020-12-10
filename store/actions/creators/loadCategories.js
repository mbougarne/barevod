import { CATEGORIES_FETCHING } from '../types';

export const fetchCategories = () => async dispatch => {
  let res = await fetch('https://sample-movie-api.web.app/categories');
  let { data } = await res.json()

  return dispatch({
    type: CATEGORIES_FETCHING,
    payload: {
      categories: data
    }
  })

  // if (data)
  // {
  //   let movies = [];

  //   for (let cat of data)
  //   {
  //     let moviesResponse = await fetch(`https://sample-movie-api.web.app/movies?category=${cat.filter}`);
  //     let items = await moviesResponse.json();
  //     movies[cat.filter] = items
  //   }
  //   console.log(movies)
  //   return dispatch({
  //     type: CATEGORY_MOVIES_FETCHING,
  //     payload: {
  //       movies
  //     }
  //   })
  // }
}
