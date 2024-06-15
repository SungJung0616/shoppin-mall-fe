import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBox, faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";
import { cartActions } from "../action/cartAction";

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const { cartItemQty } = useSelector((state) => state.cart);
  const isMobile = window.navigator.userAgent.indexOf("Mobile") !== -1;
  const [showSearchBox, setShowSearchBox] = useState(false);
  const menuList = ["All", "남성", "여성", "인기상품", "주간 특가", "주간 신상", "아울렛"];
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        
        return navigate("/");
      }    
      navigate(`?name=${event.target.value}`);
      event.target.value = "";
    }
  };

  const handleMenuClick = (menu) => {
    switch (menu) {
      case "All":
        navigate("/?category=all");
        break;
      case "남성":
        navigate("/?category=man");
        break;
      case "여성":
        navigate("/?category=woman");
        break;
      case "주간 신상":        
        navigate("/?category=new");
        break;
      case "인기상품":
      case "주간 특가":
      case "아울렛":
        alert("준비중입니다.");
        break;
      default:
        navigate("/");
    }
  };

  const logout = () => {
    dispatch(userActions.logout());
    dispatch(cartActions.clearCart());
  };

  return (
    <div className="nav-container">
      {showSearchBox && (
        <div className="display-space-between mobile-search-box w-100">
          <div className="search display-space-between w-100">
            <div>
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              <input type="text" placeholder="제품검색" onKeyPress={onCheckEnter} />
            </div>
            <button className="closebtn" onClick={() => setShowSearchBox(false)}>
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index} onClick={() => handleMenuClick(menu)}>
              {menu}
            </button>
          ))}
        </div>
      </div>
      {user && user.level === "admin" && (
        <Link to="/admin/product?page=1" className="link-area">
          Admin page
        </Link>
      )}
      <div className="nav-header">
        <div className="bumenurger- hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className="inner">
          <div className="nav-logo">
            <Link to="/">
              <img width={100} src="/image/img.png" alt="sj-logo.png" />
            </Link>
          </div>
          {!isMobile && (
            <div className="search-box landing-search-box ">
              <input type="text" placeholder="search product" onKeyPress={onCheckEnter} />
              <FontAwesomeIcon className="icon-search" icon={faSearch} />
            </div>
          )}
          <div>
            <div className="display-flex">
              {user ? (
                <div onClick={logout} className="nav-icon">
                  <FontAwesomeIcon icon={faUser} />
                  {!isMobile && <span style={{ cursor: "pointer" }}>로그아웃</span>}
                </div>
              ) : (
                <div onClick={() => navigate("/login")} className="nav-icon">
                  <FontAwesomeIcon icon={faUser} />
                  {!isMobile && <span style={{ cursor: "pointer" }}>로그인</span>}
                </div>
              )}
              <div onClick={() => navigate("/cart")} className="nav-icon">
                <FontAwesomeIcon icon={faShoppingBag} />
                {!isMobile && <span style={{ cursor: "pointer" }}>{`쇼핑백(${cartItemQty || 0})`}</span>}
              </div>
              <div onClick={() => navigate("/account/purchase")} className="nav-icon">
                <FontAwesomeIcon icon={faBox} />
                {!isMobile && <span style={{ cursor: "pointer" }}>내 주문</span>}
              </div>
              <div onClick={() => navigate("/account/profile")} className="nav-icon">
                <FontAwesomeIcon icon={faUserCircle} />
                {!isMobile && <span style={{ cursor: "pointer" }}>마이페이지</span>}
              </div>
              {isMobile && (
                <div className="nav-icon" onClick={() => setShowSearchBox(true)}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#" onClick={() => handleMenuClick(menu)}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;