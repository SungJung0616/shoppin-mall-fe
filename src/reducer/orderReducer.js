import * as types from "../constants/order.constants";

const initialState = {
  orderNum: '',
  loading: false,
  error: "",
  orderList: [],
  selectedOrder: {},
  totalPageNum: 1,
};

function orderReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_ORDER_REQUEST:
    case types.GET_ORDER_REQUEST:
    case types.GET_ORDER_LIST_REQUEST:
    case types.UPDATE_ORDER_REQUEST:
      return {...state, loading:true}
    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading:false,
        orderNum: payload, 
      };
    case types.GET_ORDER_LIST_SUCCESS:
    case types.GET_ORDER_SUCCESS:
        return{
          ...state,
          loading: false,
          orderList: payload.data,
          totalPageNum: payload.totalPageNum,
        }
    case types.UPDATE_ORDER_SUCCESS:
      const updatedOrderList = state.orderList.map(order => 
        order._id === payload._id ? payload : order
      );
      return {
        ...state,
        loading: false,
        orderList: updatedOrderList,
        selectedOrder: payload,
      };

    case types.SET_SELECTED_ORDER:
       return { ...state, selectedOrder: payload };

    case types.CREATE_ORDER_FAIL:
    case types.GET_ORDER_FAIL:      
    case types.GET_ORDER_LIST_FAIL:
    case types.UPDATE_ORDER_FAIL:
      return { ...state, loading: false, error: payload };
    
    default:
      return state;
  }
}

export default orderReducer;
