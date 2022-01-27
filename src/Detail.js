import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Detail.scss';
import { Nav, } from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group';
function Detail(props){

  let [알림창,알림창수정] = useState(true)

  let [누른탭,누른탭변경] = useState('');

  let [스위치,스위치변경] = useState(false)

  let {id} = useParams();

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{
      알림창수정(false);
    },3000)

    return ()=>{clearTimeout(타이머)}
  },[알림창]);

  return (
    <div className="container">

      {
        알림창 == true
        ? <Alert></Alert>
        : null
      }
      

      <div className="row">
        <div className="col-md-6">
          <img src='https://codingapple1.github.io/shop/shoes0.jpg' width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p className='red'>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

            <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link  eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)} }>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1"   onClick={()=>{스위치변경(false); 누른탭변경(1)} }>Option 2</Nav.Link>
        </Nav.Item>
        
      </Nav>
      
      <CSSTransition in={스위치} classNames='wow' timeout ={500}>
        <TabContent 누른탭={누른탭} 스위치변경 = {스위치변경} />
      </CSSTransition>
      

      

    </div>  
  )
};

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  })

  if (props.누른탭 == 0){
    return <div>내용0</div>
  } else if (props.누른탭 == 1){
    return <div>내용1</div>
  } else if (props.누른탭 == 2){
    return <div>내용2</div>
  }
}
  

function Alert(){
  return(
    <div className="my-alert">
      <p>재고가 얼마 남지 않았습니다</p>
    </div>
  );
}

export default Detail 