import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import Delete from "./Delete";

const CardPeople = ({ person, index }) => {
  return (
    <Card className="mb-2 CardPeople" outline color="primary">
      <CardBody className="cardBody">
        <CardTitle className="CardPeople-title">{person.name}</CardTitle>
        <CardText>
          <strong>Genero: </strong>
          {person.gender}
        </CardText>
        <CardText>
          <strong>Altura: </strong>
          {person.height}
        </CardText>
      </CardBody>
      <Delete index={index} />
    </Card>
  );
};
export default CardPeople;
