import React, { useRef } from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/images/image.png'
import About from '../../components/About/About';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Footer from '../../components/Footer/Footer';
import ServicesBlock from '../../components/ServicesBlock/ServicesBlock';
import RecomenBlock from '../../components/RecomenBlock/RecomenBlock';
import EventsBlock from '../../components/EventsBlock/EventsBlock';
import Register from '../../components/RegistrationForm/test';

const HomePage = () => {

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactsRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContacts = () => {
    if (contactsRef.current) {
      contactsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRegister = () => {
    if (registerRef.current) {
      registerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <React.Fragment>
      <div style={{
        backgroundImage: 'url(background)', /* Указываем путь к картинке */
        backgroundSize: 'cover', /* Масштабируем изображение, чтобы оно заполнило весь блок */
        backgroundPosition: 'center', /* Центрируем изображение в блоке */
        backgroundRepeat: 'no-repeat', /* Отключаем повторение изображения */
        height: '1000px'
      }}>
        <Header scrollToAbout={scrollToAbout} scrollToServices={scrollToServices} scrollToContacts={scrollToContacts} scrollToRegister={scrollToRegister} />
        <div ref={aboutRef}>
          <About />
        </div>
        <RecomenBlock />
        <div ref={servicesRef}>
          <ServicesBlock />
        </div>
        <EventsBlock />
        <div ref={registerRef}>
          <RegistrationForm />
        </div>
        
        <div ref={contactsRef}>
          <Footer />
        </div>

      </div>

    </React.Fragment>
  );
};

export default HomePage;