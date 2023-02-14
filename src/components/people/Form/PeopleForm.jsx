import React, { useState, Fragment, createRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPerson } from "../../../redux/people/peopleSlice";

const PeopleForm = () => {
  const dispatch = useDispatch();
  const modalRef = createRef();
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  /**React hook form configuracion */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <Button className="btn btn-success w-100 new-boton" onClick={toggle}>
        New Character
      </Button>
      <Modal isOpen={modal} toggle={toggle} ref={modalRef}>
        <form
          className="form-people"
          onSubmit={handleSubmit((data) => {
            /**Agrega nuevo personaje */
            dispatch(addPerson(data));
            /**resetear form */
            reset();

            /**Cierra el modal */
            toggle();
          })}
        >
          <ModalHeader toggle={toggle}>Add New Character</ModalHeader>
          <ModalBody className="form-body">
            <div className="row">
              <label>Name</label>
              <input
                {...register("name", {
                  required: "Este campo es requerido",
                  minLength: {
                    value: 4,
                    message: "Debe tener al menos 4 caracteres",
                  },
                })}
                placeholder="Name"
                className="form-control"
              />
              <p className="error-input">{errors.name?.message}</p>
            </div>
            <div className="row">
              <label>Height in cm</label>
              <input
                {...register("height", {
                  required: "Este campo es requerido",
                })}
                placeholder="Height"
                className="form-control"
                type="number"
              />
              <p className="error-input">{errors.height?.message}</p>
            </div>
            <div className="row">
              <label>Gender</label>
              <input
                {...register("gender", {
                  required: "Este campo es requerido",
                })}
                placeholder="Gender"
                className="form-control"
              />
              <p className="error-input">{errors.gender?.message}</p>
            </div>
            <div className="row">
              <label>Eye Color</label>
              <input
                {...register("eye_color", {
                  required: "Este campo es requerido",
                })}
                placeholder="Eye color"
                className="form-control"
              />
              <p className="error-input">{errors.eye_color?.message}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              type="submit"
              disabled={
                errors.name ||
                errors.height ||
                errors.gender ||
                errors.eye_color
                  ? true
                  : false
              }
            >
              Confirm
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </Fragment>
  );
};

export default PeopleForm;
