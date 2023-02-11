import React from "react";
import { Container } from "reactstrap";
import PeopleList from "../../components/PeopleList/PeopleList";
import SearchPeople from "../../components/SearchPeople/SearchPeople";



const Home = () => { 
  return (
    <Container>
      <SearchPeople />
      <PeopleList />
    </Container>
  );
};

export default Home;
