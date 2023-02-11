import React from "react";
import { useSelector } from "react-redux";
import './PeopleList.css';

import CardPerson from "../CardPerson/CardPerson";


const PeopleList = () => {
  /**recupero el state de peoples */
  const peoples = useSelector(state => state.peoples);  

  return (    
    /**recorro los resultados usando map  */
    <div className="people-list">
      {peoples.map(person => (
        <CardPerson key={person.id} person={person} />
      ))}
    </div>);
  
};

export default PeopleList;
