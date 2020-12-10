import * as types from '../actions/types';

const initialState = {
  categories: [],
  movies: [],
  isError: false,
  loading: true
}

const rootReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case types.IS_ERROR:
      return {
        ...state,
        isError: action.payload.error
      }
    case types.CATEGORIES_FETCHING:
      return {
        ...state,
        categories: [...action.payload.categories]
      }
    case types.CATEGORY_MOVIES_FETCHING:
      return {
        ...state,
        movies: [...action.payload.movies]
      }
    default:
      return state;
  }
}

export default rootReducer;
