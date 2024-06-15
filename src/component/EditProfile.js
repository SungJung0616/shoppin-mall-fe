import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { userActions } from "../action/userAction";
import "./editProfile.style.css"

const EditProfile = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const [profileData, setProfileData] = useState({
        activityName: "",
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        city: "",
        zip: "",
    });

    useEffect(() => {
        if (user) {
            setProfileData({
                activityName: user.activityName || "",
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                contact: user.contact || "",
                address: user.address || "",
                city: user.city || "",
                zip: user.zip || "",
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { activityName, firstName, lastName, contact, address, city, zip } = profileData;
        
        
        const payload = {            
            activityName, firstName, lastName, contact, address, city, zip
        };
        
        dispatch(userActions.updateUser(payload));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="activityName">
                        <Form.Label>Activity Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="activityName"
                            value={profileData.activityName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={profileData.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={profileData.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="contact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type="text"
                            name="contact"
                            value={profileData.contact}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address"
                            value={profileData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={profileData.city}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                value={profileData.zip}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Row>
                    <Button className="custom-button" variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditProfile;
