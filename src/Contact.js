import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <p style={{fontSize:"20px"}}>If you’d like to get in touch, feel free to reach out through any platform below:</p>
      <ul className='contact-list'>
        <li><a href='https://www.facebook.com/haitem.laou'><FacebookIcon/></a></li>
        <li><a href='https://linkedin.com/in/haitem-laouaoudja-653383390'><LinkedInIcon/></a></li>
        <li><a href="mailto:om_laouaoudja@esi.dz">{/* om_laouaoudja@esi.dz */}<EmailIcon/></a></li>
        <li><a href='https://www.instagram.com/laouhaitem?igsh=a2Y4anZ6c29nbXNm'><InstagramIcon/></a></li>
        <li><a href='https://github.com/haitemLaou'><GitHubIcon/></a></li>

      </ul>
    </section>
  )
}
