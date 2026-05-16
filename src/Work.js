import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import PHOTO from './Photos/Mawaquit.png'
import PHOTO1 from './Photos/To_Do_List.png'
import PHOTO3 from './Photos/Portfolio.png'
import PHOTO4 from './Photos/Weather_Project.jpeg'
import { useTranslation } from './i18nContext';

export default function Work() {
  const { t } = useTranslation();

  let Projects=[
    {
      title: t('project.todo.title'),
      details: t('project.todo.details'),
      src:PHOTO1,
      date: t('project.todo.date')
    },
    {
      title: t('project.mawaquit.title'),
      details: t('project.mawaquit.details'),
      src:PHOTO,
      date: t('project.mawaquit.date')
    },
    {
      title: t('project.weather.title'),
      details: t('project.weather.details'),
      src: PHOTO4,
      date: t('project.weather.date')
    },
    {
      title: t('project.portfolio.title'),
      details: t('project.portfolio.details'),
      src:PHOTO3,
      date: t('project.portfolio.date')
    }
  ]

  let ListProjects = Projects.map((p)=>{
    return(
      <div key={uuidv4()} className="project">
      <h2>{p.title}</h2>
      <img src={p.src} alt="profile" className="profile-img" />
      <h5>{p.date}</h5>
      <p style={{fontSize:"20px"}}>{p.details}</p>
    </div>
    )})
  return (
    <section id='work' className='work'>
        <h1 className='title'>{t('work.title')}</h1>
        <p style={{fontSize:"20px"}}>
          {t('work.description')}
        </p>
        <div  className="projects">
          {ListProjects}
        </div>
    </section>
  )
}
