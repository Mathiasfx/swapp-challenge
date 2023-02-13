import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { deletePerson } from "../../../redux/people/peopleSlice";

const Delete = ({ index }) => {
  const dispatch = useDispatch();
  /**Ejecuta la accion de DeletePerson con redux */
  const deleteHandler = (e, index) => {
    e.preventDefault();
    dispatch(deletePerson(index));
  };
  return (
    <Button
      color="danger"
      onClick={(e) => {
        deleteHandler(e, index);
      }}
    >
      Eliminar
    </Button>
  );
};

export default Delete;
