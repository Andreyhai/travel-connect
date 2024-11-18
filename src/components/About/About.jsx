import React from 'react';
import './About.css'; // Подключаем CSS файл для стилизации
import jpg from '../../assets/images/image.png'
const About = React.forwardRef(({ref}) => {
  return (
    <section className="about" ref={ref}>
      <div className="about-content">
        <h2>О нас</h2>
        <p>
          TravelConnect — это платформа для людей, которые ищут попутчиков для своих путешествий. Мы помогаем вам
          найти единомышленников, чтобы ваш отдых или путешествие стали еще ярче и интереснее.
        </p>
        <p>
          Наша цель — соединить людей с общими интересами, чтобы путешествия стали не только комфортными, но и
          насыщенными новыми знакомствами. Мы верим, что каждое путешествие может стать уникальным, если в нем есть
          люди, с которыми можно поделиться впечатлениями.
        </p>
        <p>
          Присоединяйтесь к нам и отправляйтесь в путь с новыми друзьями!
        </p>
        <button className="cta-button">Присоединиться</button>
      </div>

      <div className="about-image">
        <img src={jpg} alt="Путешествия с попутчиками" />
      </div>
    </section>
  );
});

export default About;
