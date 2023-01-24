import React, { useState } from 'react';
import MainHeader from './components/MainHeader';
// import Personal from './components/Personal';
import UserInfo from './components/UserInfo';
import WorkSpace from './components/WorkSpace';
import Planning  from './components/Planning';
import End from './components/End'
import './App.css';

const Slide=(state)=>{
    if(state==1){
      return (<UserInfo />)
    }
    if(state==2){
      return (<WorkSpace />)
    }
    if(state==3){
    return (<><Planning /></>)
    }
    if(state==4){
      return ( <End/>);
    }
}


function App() {
  const [level, setLevel] = useState(4);
  const [select, setSelect] = useState(1);

  const func=(level)=>{
    setLevel(level);
  }
  return (
    <div className='h-screen flex w-screen justify-center  '>
      <div className='w-1/3 h-[80%] flex flex-col justify-around '>
          <MainHeader level={level} func={func} />
            {/* <UserInfo />         */}
            {/* <WorkSpace />         */}
            {/* <Planning /> */}
            {Slide(level)}
           
      </div>
    </div>
  )
}

export default App;
