import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
// import { getValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [show, setShow] = useState(true);

const [formData,setFormData]=useState([{}])
const getValue = (e) => {
let input = e.target;
let prop = input.name;
let value = "";
  if(input.type == "file")
  {
   // console.log(input.files[0]);
   value = input.files[0].name;
  }
  else{
    //console.log(input.value);
     value = input.value;
    //document.getElementById('abc').innerHTML = val;
  }
  //console.log(value);
return setFormData((old)=>{
  return{
    ...old,
    [prop] : value
  }
})
}
function getData(e){
  e.preventDefault()
  console.log(formData);
}
  return (
    <>
    <Container>
     <Button className='mt-4 fw-bold' variant='success' onClick={()=>setShow(true)}>
      <i className='fa fa-plus'></i>Add User
     </Button>
     <h1 id='abc'></h1>
<Modal show={show}  >
  <Modal.Header closeButton onClick={()=>setShow(false)} >
    <Modal.Title >
      <h2>User Registration</h2>
    </Modal.Title>
  </Modal.Header>
<Modal.Body>
<Form onSubmit={getData}>
  {/* <input type='text'></input> */}
  <Form.Group>
    <Form.Label>Full Name</Form.Label>
  <Form.Control type='text' name='name' placeholder='Type Your Name Here' onChange={getValue}></Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>E-Mail</Form.Label>
  <Form.Control type='email' name='email' placeholder='Type Your E-Mail Here' onChange={getValue}></Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>Password</Form.Label>
  <Form.Control type='password' name='password' placeholder='Type Your Password Here' onChange={getValue}></Form.Control>
  </Form.Group>
  <Form.Group>
 <Form.Label>Mobile Number</Form.Label>
  <Form.Control type='tel' name='mobilenumber' placeholder='Type Your Mobile Number Here' onChange={getValue}></Form.Control>
  </Form.Group>
 <Form.Group>
 <Form.Label>Profile Picture</Form.Label>
  <Form.Control type='file' name='dp' placeholder='Please Upload Your Profile Picture Here' onChange={getValue}></Form.Control>
  </Form.Group>
<br/>
<Form.Group className='mt-2'>
<Button type='submit'>Submit</Button>  
</Form.Group>
 
</Form>
</Modal.Body>
<Modal.Footer>
  <Button variant='danger' onClick={()=>setShow(false)}>
    Close <i className='fa fa-close'></i></Button>
</Modal.Footer>
</Modal>
    </Container>
    
    
    
    </>
    );
}

export default App;
