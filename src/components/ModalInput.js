import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ModalInput({ showModal, handleClose, handleNameSubmit }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton className="bg-dark text-white">
        <Modal.Title>Enter Your First Name</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-white">
        <Form onSubmit={handleNameSubmit}>
          <Form.Group controlId="formName" className="m-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your first name here..."
            />
          </Form.Group>
          <Button variant="btn btn-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalInput;