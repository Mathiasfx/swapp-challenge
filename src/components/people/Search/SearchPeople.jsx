import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPeople } from "../../../redux/people/peopleSlice";

const SearchPeople = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  /**Busqueda */
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    dispatch(filterPeople(event.target.value));
  };

  return (
    <div className="Search">
      <form>
        <input
          className="input-search"
          name="name"
          type="text"
          placeholder="Search Characters"
          value={search}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default SearchPeople;
