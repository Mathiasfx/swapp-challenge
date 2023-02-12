import React from 'react'
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';
import ButtonDelete from './ButtonDelete';

const CardPeople = ({ person,index }) => {
  return (
    <Card className='mb-2 CardPeople' outline color="primary">
       <CardBody className='cardBody'>
          <CardTitle className='CardPeople-title'>{person.name}</CardTitle>
          <CardText><strong>Genero: </strong>{person.gender}</CardText>        
          <CardText><strong>Altura: </strong>{person.height}</CardText>    
      </CardBody>
      <ButtonDelete index={index}/>    
    </Card>     
  )
}
export default CardPeople
