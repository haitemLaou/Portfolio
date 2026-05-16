import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from './i18nContext';

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t('contact.form.subject')}${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:om_laouaoudja@esi.dz?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact">
      <h1 className='title' style={{textAlign: 'center'}}>{t('contact.title')}</h1>
      <p style={{fontSize:"20px", marginBottom: "20px"}}>{t('contact.description')}</p>
      
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact.form.name')}</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder={t('contact.form.name')}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.form.email')}</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder={t('contact.form.email')}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.form.message')}</label>
            <textarea 
              id="message" 
              rows="4" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder={t('contact.form.message')}
              required 
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            {t('contact.form.send')} <SendIcon fontSize="small" />
          </button>
        </form>
      </div>
      <ul className='contact-list'>
        <li><a href='https://www.facebook.com/haitem.laou'><FacebookIcon/></a></li>
        <li><a href='https://linkedin.com/in/haitem-laouaoudja-653383390'><LinkedInIcon/></a></li>
        <li><a href="mailto:om_laouaoudja@esi.dz"><EmailIcon/></a></li>
        <li><a href='https://www.instagram.com/laouhaitem?igsh=a2Y4anZ6c29nbXNm'><InstagramIcon/></a></li>
        <li><a href='https://github.com/haitemLaou'><GitHubIcon/></a></li>

      </ul>
    </section>
  )
}
