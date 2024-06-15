import * as types from "../constants/user.constants";
const initialState = {
  loading: false,
  user: null,
  error: "",
  totalPageNum: 0,
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case types.REGISTER_USER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGIN_WITH_TOKEN_REQUEST:
    case types.UPDATE_USER_REQUEST:
    case types.USER_GET_REQUEST:
    case types.USER_UPDATE_REQUEST:
      return {...state, loading: true};

    case types.LOGIN_SUCCESS:
    case types.GOOGLE_LOGIN_SUCCESS:
    case types.LOGIN_WITH_TOKEN_SUCCESS:
    case types.UPDATE_USER_SUCCESS:     
      return {...state, loading: false, user: payload.user};
    case types.USER_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          userList: action.payload.data,
          totalPageNum: action.payload.totalPageNumber,
        };
    case types.USER_UPDATE_SUCCESS:
      const updatedUserList = state.userList.map(user =>
         user._id === action.payload._id ? action.payload : user
      );
      return { ...state, loading: false, userList: updatedUserList };

    case types.REGISTER_USER_SUCCESS:
      return {...state, loading: false, error: ""};
    case types.LOGIN_FAIL:    
    case types.REGISTER_USER_FAIL:
    case types.UPDATE_USER_FAIL:
    case types.USER_GET_FAIL:
    case types.USER_UPDATE_FAIL:
      return {...state, loading: false, error: payload};
    case types.LOGIN_WITH_TOKEN_FAIL:
      return {...state, loading: false};
    case types.LOGOUT:
      return {...state, user:null};
    case types.CLEAR_ERROR:
      return {...state, error: null };
    default:
      return state;
  }
  
}

export default userReducer;
