import './App.css'
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReorderIcon from '@mui/icons-material/Reorder';
import SideBar from './SideBar';
import { ShowContext,SetShowContext  } from './ShowContext';
import { useTranslation } from './i18nContext';

export default function Header({small}) {
  const { t, lang, setLang } = useTranslation();
  const settingsKeys = ['home', 'about', 'work', 'contact'];
  const show = useContext(ShowContext) ;
  const setShow=useContext(SetShowContext);
  const ListSettings = settingsKeys.map((s) => {
    let link = `#${s}`;
    return (
      <li key={uuidv4()}>
        <a href={link}>{t(`nav.${s}`)}</a>
      </li>
    );
  });
  function handleOpenSideBar(){
    setShow(true);
    console.log('clicked');
  }
  const LangSwitcher = () => (
    <div className="lang-switcher">
      {['en', 'fr', 'ar'].map((l) => (
        <button
          key={l}
          className={`lang-btn ${lang === l ? 'active' : ''}`}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const smallMenu = [
    ...ListSettings,
    <li key="lang" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <LangSwitcher />
    </li>
  ];

  if(small){
      return (
      <div className='Header'>
        <div style={{fontSize:"20px", display: 'flex', alignItems: 'center', gap: '15px'}}> 
          <ReorderIcon onClick={handleOpenSideBar} className='sideBar' sx={{fontSize:"40px"}}/>
          <SideBar show={show} list={smallMenu}/>
        </div>
        <h1>Laouaoudja Haitem</h1>
      </div>
        
      
    )
  }else{
    return (
      <div className='Header'>
        <h1>Laouaoudja Haitem</h1>
        <ul style={{fontSize:"20px", display: 'flex', alignItems: 'center', gap: '20px', listStyle: 'none'}}> 
          {ListSettings}
          <li><LangSwitcher /></li>
        </ul>
    </div>
    )
  }
  
}
