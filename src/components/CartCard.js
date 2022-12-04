import React from 'react'
import { Card } from "react-bootstrap";

export const CartCard = ({title,imglink}) => {
  return (
    <Card>
    <Card.Body>
    <Card.Img class ="cardImage" variant="top" src={imglink}  />
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </Card.Text>
    </Card.Body>
 </Card>

  )
}
