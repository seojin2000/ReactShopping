import logo from './logo.svg';
import './App.css';
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';
import { useState } from 'react';
import Data from './data.js';
import { Route, Switch, Link } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';
function App() {

  let [shoes,shoes변경] = useState(Data);
  let [btnonclick,btnonclick수정] = useState(true);
  let [clicknum,clicknum수정] = useState(1);
  

  return (
    <div className="App">
     
      <Navigationbar></Navigationbar> 

      <Switch>
        <Route exact path = "/">
        
          <Jumbotron />
          
          <div className='container'>

            <div className='row'>
              {
                shoes.map((data,i)=>{
                  return(
                    <Card data={data} i = {i} key = {i}></Card>
                  )
                })
              }
            </div>

          </div>

            <button className="more btn btn-primary" onClick={()=>{
                
              clicknum수정(btnonclick = btnonclick + 1 );
              console.log(clicknum);
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ shoes변경([...shoes, ...result.data]) })
              .catch(()=>{console.log('fail')})
             }}>더보기</button>

        </Route>
      
        <Route path='/detail/:id'>
          <Detail shoes = {shoes}></Detail>
        </Route>

        <Route path='/cart'>
          <Cart></Cart>
        </Route>

        <Route path ='/:id'>
          <div>새로 만든 route</div>
        </Route>

        

      </Switch>

      

    </div>
  );
}

function Navigationbar(){
  return(
    <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoping</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to ='/'>Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to ='/detail'>Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

function Card(props){
  return(
  <div className='col-md-4'>
    <img src= {`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} />
    <h4>{props.data.title}</h4>
    <p>{props.data.content}&{props.data.price}</p>
  </div>
  )
  
}

function Jumbotron(){
  return(
    <div className='jumbotron'>
      <h1 className='jumbotron-title'>20% season off</h1>
      <p className='jumbotron-text'>화끈하게 쏜다! 대박세일</p>
      <Button variant="primary">More</Button>{' '}
    </div>
  )
  
}

export default App;
