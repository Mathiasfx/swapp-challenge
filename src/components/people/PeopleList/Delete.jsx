import React, { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { deletePerson } from "../../../redux/people/peopleSlice";

const Delete = ({ index, name }) => {
  const dispatch = useDispatch();
  const modalRef = createRef();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  /**Ejecuta la accion de Eliminar */
  const deleteHandler = (e, index) => {
    e.preventDefault();
    dispatch(deletePerson(index));
    toggle();
  };
  return (
    <>
      <Button
        color="danger"
        onClick={(e) => {
          toggle();
        }}
      >
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} ref={modalRef}>
        <ModalHeader toggle={toggle}>Delete Person</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this person? <strong>{name}</strong>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={(e) => {
              deleteHandler(e, index);
            }}
          >
            Delete
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Delete;
