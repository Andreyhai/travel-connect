import React from 'react';
import Header from '../../components/Header/Header';
import background from '../../assets/images/image.png'
import About from '../../components/About/About';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Footer from '../../components/Footer/Footer';
import ServicesBlock from '../../components/ServicesBlock/ServicesBlock';
import RecomenBlock from '../../components/RecomenBlock/RecomenBlock';
import EventsBlock from '../../components/EventsBlock/EventsBlock';
import AuthModal from '../../components/AuthModal/AuthModal';
import AccountHeader from '../../components/AccountHeader/AccountHeader';

const AccountPage = () => {
    const user = {
        name: 'Андрей',
        avatar: 'https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png',
        contact: 'ustavitskii@sfedu.ru'
    }
  return (
    <React.Fragment>
      <div style={{
         backgroundImage: 'url(background)', /* Указываем путь к картинке */
         backgroundSize: 'cover', /* Масштабируем изображение, чтобы оно заполнило весь блок */
         backgroundPosition: 'center', /* Центрируем изображение в блоке */
         backgroundRepeat: 'no-repeat', /* Отключаем повторение изображения */
         height: '1000px'
      }}>
        {/* <Header /> */}
<AccountHeader user={user} />
        {/* <Footer /> */}
      </div>
        
    </React.Fragment>
  );
};

export default AccountPage;