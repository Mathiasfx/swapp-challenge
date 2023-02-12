import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../services/swpeople.api";
import CardPeople from "./CardPerson";

const PeopleList = () => {

  const dispatch = useDispatch();  
  const peoples = useSelector(state => state.peoples.people); 

  useEffect(() => {
    dispatch(getAll());  
  }, []);
  console.log(peoples);
  return (    
    /**recorro los resultados usando map  */
    <div className="people-list">  
      {peoples.map((person, i) => (
      <CardPeople key={i} person={person} index={i} />
    ))}
       
      
    </div>);
  
};

export default PeopleList;
