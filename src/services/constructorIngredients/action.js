import { ingredientMinusCount, ingredientPlusCount } from "../burgerIngredients/action";
import {
  CONSTRUCTOR_ADD_BUN,
  CONSTRUCTOR_ADD_INDGREDIENT,
  CONSTRUCTOR_REMOVE_INGREDIENT,
  CONSTRUCTOR_RESET,
  CONSTRUCTOR_UPDATE,
} from "../constants";

export const constructorAddBun = (item) => {
  return {
    type: CONSTRUCTOR_ADD_BUN,
    item,
  };
};

export const constructorAddIngredient = (item) => (dispatch) => {
  dispatch({
    type: CONSTRUCTOR_ADD_INDGREDIENT,
    item,
  });
  dispatch(ingredientPlusCount(item._id));
};

export const constructorRemoveIngredient = (dragId, ingredientId) => (dispatch) => {
  dispatch({
    type: CONSTRUCTOR_REMOVE_INGREDIENT,
    index: dragId,
  });
  dispatch(ingredientMinusCount(ingredientId));
};

export const constructorUpdate = (dragIndex, hoverIndex) => {
  return {
    type: CONSTRUCTOR_UPDATE,
    dragIndex,
    hoverIndex,
  };
};

export const constructorReset = () => {
  return {
    type: CONSTRUCTOR_RESET,
  };
};