import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props){
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>

        <tr>
          <td>1</td>
          <td>{props.state[0].name}</td>
          <td>{props.state[0].quan}</td>
          <td>
            <button onClick={()=>{ props.dispatch({type : '수량증가'}) }}>+</button>
            <button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button>
          </td>
        </tr>
      </Table>

      {
        props.alert열기 === true
        ? (
          <div className='my-alert'>
        <p>지금 구매하면 신규할인 20%</p>
        <button onClick={()=>{props.dispatch({type : 'alert닫기'})}}>닫기</button>
      </div>
        )
        :null
      }
      

    </div>
   
  
  
  );
}

function 함수명(state){
  return{ state : state.reducer, 
          alert열기 : state.reducer2
  }
  
}

export default connect(함수명)(Cart);