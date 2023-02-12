import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'reactstrap'
import { deletePerson } from '../../redux/people/peopleSlice'

const ButtonDelete = ({ index }) => {
  const dispatch = useDispatch()
  const deleteHandler = (e,index) => {
    e.preventDefault()
    dispatch(deletePerson(index))
  }
  return (
    <Button  color="danger" onClick={(e)=>{deleteHandler(e,index)}}>Eliminar</Button>
  )
}

export default ButtonDelete