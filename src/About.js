import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from './i18nContext';

export default function About() {
  const { t } = useTranslation();

  let About=[t('about.p1'), t('about.p2'), t('about.p3')];
  let AboutList = About.map((p)=>{
    return(
      <li key={uuidv4()} dangerouslySetInnerHTML={{ __html: `<p>${p}</p>` }} style={{fontSize:"20px"}}/>
    )
  })
  return (
    <section id='about' className='about'>
        <h1 className='title'>{t('about.title')}</h1>
        <p className="about-text" style={{fontSize:"20px"}}>
          {t('about.greeting')}
        </p>
        <ul className='list-about'>
            {AboutList}
        </ul>
    </section>
  )
}
