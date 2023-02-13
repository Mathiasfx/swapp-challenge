import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../services/swService.api";
import CardPeople from "./CardPerson";

const PeopleList = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.peoples.people);
  /**llamo la lista ni bien cargo el componente*/
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    /**recorro los resultados usando map  */
    <div className="people-list">
      {peoples.map((person, i) => (
        <CardPeople key={i} person={person} index={i} />
      ))}
    </div>
  );
};

export default PeopleList;
