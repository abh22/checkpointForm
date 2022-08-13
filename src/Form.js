import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
const Function= () => {
  return (
    
    <Container fluid className='App-header' >
     <Card className="mb-3" style={{color:"#000"}}>
<Card.Body >
  <Card.Title style={{fontSize:25}} >Welcome!</Card.Title>
  <Card.Text style={{fontSize:15}}>Sign in, or create an account if you don't already have one.</Card.Text>
</Card.Body>
</Card>
    <Form className='mt-5'>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      
      <Form.Group className="mb-5" controlId="formBasicSelectbox">
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">Student</option>
      <option value="2">Instructor</option>
      <option value="3">Other</option>
    </Form.Select></Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
        <Form.Check  type="checkbox" label="Check me out" style={{fontSize:18}} />
      </Form.Group>
      
      <Button className="mt-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </Container>
  );
  
}

export default Function