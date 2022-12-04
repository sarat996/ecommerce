import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
function DispCard({title,desc,category,cost,imglink,count=0}) {
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
        <Card.Link href="#"> Add to Cart</Card.Link>
        <Card.Text>{count}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DispCard;