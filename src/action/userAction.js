import api from "../utils/api";
import * as types from "../constants/user.constants";
import { commonUiActions } from "./commonUiAction";
import * as commonTypes from "../constants/commonUI.constants";
const loginWithToken = () => async (dispatch) => {
  try{
    dispatch({type:types.LOGIN_WITH_TOKEN_REQUEST});
    const response = await api.get("/user/me");
    if(response.status !== 200)throw new Error(response.error)
    console.log("response",response.data)
    dispatch({type:types.LOGIN_WITH_TOKEN_SUCCESS, payload:response.data});

  }catch(error){
    dispatch({type:types.LOGIN_WITH_TOKEN_FAIL, payload:error.response?.data?.message || error.message});
    dispatch(logout());
  }

}; 
const loginWithEmail = ({email,password}) => async (dispatch) => {
  try{
    
    dispatch({type:types.LOGIN_REQUEST});
    const response = await api.post('/auth/login',{email,password});
    if(response.status !== 200)throw new Error(response.error)
    sessionStorage.setItem("token",response.data.token);
    dispatch({type:types.LOGIN_SUCCESS, payload:response.data});
    
  }catch(error){
    dispatch({type:types.LOGIN_FAIL, payload:error.response?.data?.message || error.message});
  }
};
const logout = () => async (dispatch) => {
  dispatch({type:types.LOGOUT});
  sessionStorage.removeItem("token");
};

const loginWithGoogle = (token) => async (dispatch) => {

};

const registerUser =
  ({ email, name, password },navigate) => async (dispatch) => {
    try{
      dispatch( {type: types.REGISTER_USER_REQUEST})

      const response = await api.post('/user', {email,name,password});

      if(response.status !==200) throw new Error(response.error || "Failed to register")
      dispatch({type:types.REGISTER_USER_SUCCESS})
      dispatch(commonUiActions.showToastMessage("Register Success","success"));
      navigate("/login");
    }catch(error){
      dispatch({type: types.REGISTER_USER_FAIL, payload:error.response?.data?.message || error.message})
    }
  };

export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  loginWithGoogle,
  registerUser,
};
