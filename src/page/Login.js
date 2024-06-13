import React, { useState,useEffect } from "react";
import { Container, Form, Button, Alert, Spinner  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "../style/login.style.css";
import { GoogleLogin } from '@react-oauth/google';
import { hasGrantedAllScopesGoogle } from "@react-oauth/google";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,loading } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.user.error);

  const loginWithEmail = (event) => {
    event.preventDefault();    
    dispatch(userActions.loginWithEmail({ email, password }));
  };

  const handleGoogleLogin = async (googleData) => {
    // 구글로 로그인 하기
    console.log("googleData",googleData)
    dispatch(userActions.loginWithGoogle(googleData.credential));
    console.log("user", user)
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(userActions.clearError());
  }, [dispatch]);


  return (
    <>
      <Container className="login-area">
        {error && (
          <div className="error-message">
            <Alert variant="danger">{error}</Alert>
          </div>
        )}
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Form className="login-form" onSubmit={loginWithEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <div className="test-id">Test ID : admin@gmail.com / Test PW : 123</div>
            <div className="display-space-between login-button-area">
              <Button variant="danger" type="submit">
                Login
              </Button>
              
              <div>
                Don't have an account?<Link to="/register"> Sign up</Link>{" "}
              </div>
            </div>

            <div className="text-align-center mt-2">
              <p>-Login with external accounts-</p>
              <div className="social-icons">

              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                console.log('Login Failed');
                 }}
              />;

              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
              <div className="display-center"></div>
            </div>
          </Form>
        )}
      </Container>
    </>
  );
};

export default Login;
