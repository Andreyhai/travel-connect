import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/images/image.png'
import About from '../../components/About/About';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Footer from '../../components/Footer/Footer';
import ServicesBlock from '../../components/ServicesBlock/ServicesBlock';

const HomePage = () => {
  return (
    <React.Fragment>
      <div style={{
         backgroundImage: 'url(background)', /* Указываем путь к картинке */
         backgroundSize: 'cover', /* Масштабируем изображение, чтобы оно заполнило весь блок */
         backgroundPosition: 'center', /* Центрируем изображение в блоке */
         backgroundRepeat: 'no-repeat', /* Отключаем повторение изображения */
         height: '1000px'
      }}>
        <Header />
        <About />
        <ServicesBlock />
        <RegistrationForm />
        <Footer />
      </div>
        
    </React.Fragment>
  );
};

export default HomePage;