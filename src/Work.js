import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import PHOTO from './Photos/Mawaquit.png'
import PHOTO1 from './Photos/To_Do_List.png'
import PHOTO3 from './Photos/Portfolio.png'
export default function Work() {
  let Projects=[
    {
      title:"To Do List",
      details:"A simple app to manage your daily tasks.",
      src:PHOTO1,
      link:""
    },
    {
      title:"Mawaquit",
      details:"Mawaquit",
      src:PHOTO,
      link:""
    },
    {
    title: "Weather WebSite",
    details: "Displays current weather information for any city using a public API.",
    src: ""
    },
    {
    title: "Portfolio Website",
    details: "Personal portfolio showcasing projects and skills.",
    src:PHOTO3 
    }

  ]

  let ListProjects = Projects.map((p)=>{
    return(
      <Grid key={uuidv4()} className="project" size={6}>
      <h2>{p.title}</h2>
      <p>{p.details}</p>
      <img src={p.src} alt="profile" className="profile-img" />
    </Grid>
    )})
  return (
    <section id='work' className='work'>
        <h1 className='title'>Work.</h1>
        <Grid container spacing={2}>
          {ListProjects}
        </Grid>
    </section>
  )
}
