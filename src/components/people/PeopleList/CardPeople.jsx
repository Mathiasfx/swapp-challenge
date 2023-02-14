import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";
import Delete from "./Delete";

const CardPeople = ({ person, index }) => {
  return (
    <Card className="mb-2 CardPeople">
      <CardTitle className="CardPeople-title">{person.name}</CardTitle>
      <CardBody className="cardBody">
        <div>
          <CardText>
            <strong>Altura: </strong>
            {person.height} cm
          </CardText>
          <CardText>
            <strong>Genero: </strong>
            {person.gender}
          </CardText>
          <CardText>
            <strong>Color de Ojos: </strong>
            {person.eye_color}
          </CardText>
        </div>
        <Delete index={index} name={person.name} />
      </CardBody>
    </Card>
  );
};
export default CardPeople;
