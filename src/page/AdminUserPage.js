import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SearchBox from "../component/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";
import UserTable from "../component/UserTable";
import * as types from "../constants/user.constants";
import ReactPaginate from "react-paginate";
import { useSearchParams, useNavigate } from "react-router-dom";

const AdminUserPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const [searchQuery, setSearchQuery] = useState({
    page: query.get("page") || 1,
    email: query.get("email") || ""    
  });
  const error = useSelector((state) => state.user.error);
  const totalPageNum = useSelector((state) => state.user.totalPageNum);
  const tableHeader = ["#", "Email", "Activity Name", "First Name", "Last Name", "Level"];

  useEffect(() => {
    dispatch(userActions.getUserList({ ...searchQuery }));
  
  }, [query]);

  useEffect(() => {
    if (searchQuery.email === "") {
      delete searchQuery.email;
    }
   
    const params = new URLSearchParams(searchQuery);
    const queryString = params.toString();
    navigate("?" + queryString);
  }, [searchQuery]);

  const handlePageClick = ({ selected }) => {
    setSearchQuery({ ...searchQuery, page: selected + 1 });
  };

  const handleLevelChange = (userId, level) => {
    dispatch(userActions.updateUserLevel(userId, level));
  };

  return (
    <div className="locate-center">
        <Container>
      준비중입니다.
      </Container>
    </div>
  );
};

export default AdminUserPage;
