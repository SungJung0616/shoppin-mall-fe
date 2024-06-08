import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { commonUiActions } from "../action/commonUiAction";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const { toastMessage } = useSelector((state) => state.ui);

  useEffect(() => {
    if (toastMessage.message !== "" && toastMessage.status !== "") {
      const { message, status } = toastMessage;
      toast[status](message, { theme: "colored" });
      dispatch(commonUiActions.clearToastMessage());    
    }
    
  }, [toastMessage]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default ToastMessage;
