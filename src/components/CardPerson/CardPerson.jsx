import React from 'react'
import './CardPerson.css'
import { Card, Button, CardTitle, CardText, CardBody } from 'reactstrap';


const CardPerson = ({ person }) => {
  return (
    <Card className='mb-2 cardPerson' outline color="primary">
       <CardBody className='cardBody'>
          <CardTitle>{person.name}</CardTitle>
          <CardText>{person.gender}</CardText>
         
      </CardBody>
      <Button className='m-1' color='secondary'>Editar</Button>
      <Button className='m-1' color="danger">Eliminar</Button>
    </Card>
      
    
  )
}



export default CardPerson
