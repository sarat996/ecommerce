import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react'
const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      padding: '3rem',
      margin:'20px',
      height:'400px',
      width:'300px'
    },
    cardImage: {
      objectFit: 'cover',
      height:'200px',
      width:'100%',
    
    }
  }
function DispCard({title,desc,category,cost,imglink}) {
    const [count,setCount] = useState(0);
    const increment=()=>{
        console.log('in increment')
        if(count<5){
        setCount(count=>count+1)
        }else if(count==5){
            setCount("Already added max items : 5")
        }
    }
    const decrement=()=>{
        console.log('in decrement')
        if(count>0){
        setCount(count=>count-1)
        }
        if(count==="Already added max items : 5"){
            setCount(4);
        }
    }

   
  return (
    <Card style={styles.card}>
      <Card.Img class ="cardImage" variant="top" src={imglink} style={styles.cardImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category:{category}</ListGroup.Item>
        <ListGroup.Item>Cost:{cost}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <button type='button' onClick={increment}>+</button>
        <Card.Text>{count}</Card.Text>
        <button type='button' onClick={decrement}>-</button>
      </Card.Body>
    </Card>
  );
}

export default DispCard;