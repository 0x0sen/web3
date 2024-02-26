/*eslint-disable */
//워닝 메세지 없애기

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

  

function App() {
  let post ='sinagawa'
  let [old,new1]= useState(['호식이','두마리','치킨'])
  let [iine,addiine]= useState(0);

  let [logo,setLogo]= useState('logo')


  //변수 스테이스 차이점은 변수가 변경이 된다면 html은 병경되야 하지만 변경이 되지 않음
  //스테이스는 제목이 변경이 된다면 스테이스 경우에는 자동으로 변경이됨
  //즉 자주 변경될꺼 같으면 State로 변경하자 
  //로고같은거는 자주 바뀌지 않으니까 변경할 필요없이 날짜나 제목 내용 클레스 네임 같은 것들
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:  'ss26px' }}>{logo}</h4>
      </div>


      <button onClick={()=>{
        let copy =[...old];
//수정할떄 오브잭트 문자라면 이런식으로 수정해줘야함 
//즉 독립적 카피본(shallow copy)을 만들어서 수정해줘야함
        copy[0]='唐揚げ';
        new1(copy);
        }}>新しい</button>

      <button onClick={()=>{
        let red=[...old];
        red.sort();
        new1(red);
      }}>
        good day

      </button>



      <div className='list'>
        <h4>{old[0]}<span onClick={()=>{addiine(iine+1)}}>(・∀・)ｲｲﾈ!!</span>
        {iine}</h4> 
        <p>2월 17일 발행</p>
      </div>
      
      <div className='list'>
      <h4>{old[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
      <h4>{old[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>

      
      
    </div>
  );
}

/** 이런식으로 함수형으로 만들어진 html코드를 컴포넌트라고 부른다 
 * const Modal =()=>{
 * const 로 만들면 에러매세지를 만들어주기때문에 이런식으로 만들수 있음
 *  return(
 *      <div>
 *      html code 
 *      </div>
 *      )
 * }
 * 위와 아래는 같은 뜻이만 함수를 만듣때 차이가 있다 
 */

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>

  //컴포넌트 장점
  //반복적으로 나오는 html에서 컴포넌틀르 만듬
  //페이지 전환할때도 컴포넌트로 만들어서 쓰면 좋음
  //자주 변경되는것들
  //컴포넌트 만드는건 자유지만 책임이 따른다
  )

}


export default App;
