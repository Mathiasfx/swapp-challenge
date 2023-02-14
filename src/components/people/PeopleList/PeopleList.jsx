import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import { getAll } from "../../../services/swService.api";
import CardPeople from "./CardPeople";

const PeopleList = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.peoples.people);
  const filter = useSelector((state) => state.peoples.filter);

  /**Estado de la consulta */
  const loading = useSelector((state) => state.peoples.status);

  /**llamo la lista ni bien cargo el componente*/
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    /**recorro los resultados usando map  */
    <>
      <div className="people-list">
        {loading === "loading" ? (
          <Spinner />
        ) : loading === "succeeded" ? (
          peoples.map((person, i) => (
            <CardPeople key={i} person={person} index={i} />
          ))
        ) : loading === "searching" ? (
          filter.map((person, i) => (
            <CardPeople key={i} person={person} index={i} />
          ))
        ) : null}
      </div>
      {peoples.length === 0 && loading !== "loading" ? (
        <h5>No personajes para filtrar, agregue uno</h5>
      ) : null}
    </>
  );
};

export default PeopleList;
