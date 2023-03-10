import {
  INGREDIENTS_MINUS_COUNT,
  INGREDIENTS_PLUS_COUNT,
  INGREDIENTS_REQUEST,
  INGREDIENTS_REQUEST_FAILED,
  INGREDIENTS_REQUEST_SUCCESS,
} from "../actions/constants";
import { initialCount } from "../../utils/initial-count";

export const initialState = {
  ingredients: [],
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_REQUEST: {
      return state;
    }
    case INGREDIENTS_REQUEST_SUCCESS: {
      return {
        ...state,
        ingredients: [...state.ingredients, ...initialCount(action.ingredients)],
      };
    }
    case INGREDIENTS_REQUEST_FAILED: {
      return state;
    }
    case INGREDIENTS_PLUS_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action.ingredientId
            ? { ...ingredient, count: ingredient.count + 1 }
            : ingredient,
        ),
      };
    }
    case INGREDIENTS_MINUS_COUNT: {
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action.ingredientId
            ? { ...ingredient, count: ingredient.count - 1 }
            : ingredient,
        ),
      };
    }
    default: {
      return state;
    }
  }
};
