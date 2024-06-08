import * as types from "../constants/commonUI.constants";

const showToastMessage = (message, status) => async (dispatch) => {
  dispatch({ 
    type: types.SET_TOAST_MESSAGE, 
    payload: { message, status } 
  });
};

const clearToastMessage = () => async (dispatch) => {
  dispatch({ type: types.CLEAR_TOAST_MESSAGE });
};

export const commonUiActions = {
  showToastMessage,
  clearToastMessage,
};
