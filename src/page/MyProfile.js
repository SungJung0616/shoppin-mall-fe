import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { userActions } from "../action/userAction";
import { commonUiActions } from "../action/commonUiAction";
import EditProfile from "../component/EditProfile";
import { useNavigate } from "react-router";
import "./myProfile.style.css"

const MyProfile = () => {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(true);
    };

    const handleEditClose = () => {
        setShowEdit(false);
    };

    if(!user) navigate("/login");

    return (
        <Container>
            <h2>My Profile</h2>
            {user && (
                <>
                    <Row className="mb-3">
                        <Col><strong>Email:</strong> {user?.email}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>Activity Name:</strong> {user?.activityName}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>First Name:</strong> {user?.firstName}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>Last Name:</strong> {user?.lastName}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>Contact:</strong> {user?.contact}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>Address:</strong> {user?.address}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>City:</strong> {user?.city}</Col>
                    </Row>
                    <Row className="mb-3">
                        <Col><strong>Zip:</strong> {user?.zip}</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button className="custom-button" variant="primary" onClick={handleEditClick}>Edit Profile</Button>
                            <Button variant="secondary" href="/">Home</Button>
                        </Col>
                    </Row>
                </>
            )}
            {showEdit && <EditProfile show={showEdit} handleClose={handleEditClose} />}
        </Container>
        )
};

export default MyProfile;
