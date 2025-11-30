import './App.css'
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReorderIcon from '@mui/icons-material/Reorder';
import SideBar from './SideBar';
import { ShowContext,SetShowContext  } from './ShowContext';

export default function Header({small}) {
  const settings = ['Home', 'About', 'Work', 'Contact'];
  const show = useContext(ShowContext) ;
  const setShow=useContext(SetShowContext);
  const ListSettings = settings.map((s) => {
    let link = `#${s.toLowerCase()}`;
    return (
      <li key={uuidv4()}>
        <a href={link}>{s}</a>
      </li>
    );
  });
  function handleOpenSideBar(){
    setShow(true);
    console.log('clicked');
  }
  if(small){
      return (
      <div className='Header'>
        <h1>Laouaoudja Haitem</h1>
        <div style={{fontSize:"20px"}}> 
          <ReorderIcon onClick={handleOpenSideBar} className='sideBar'/>
          <SideBar show={show} list={ListSettings}/>
        </div>
    </div>
        
      
    )
  }else{
    return (
      <div className='Header'>
        <h1>Laouaoudja Haitem</h1>
        <ul style={{fontSize:"20px"}}> 
          {ListSettings}
        </ul>
    </div>
    )
  }
  
}
