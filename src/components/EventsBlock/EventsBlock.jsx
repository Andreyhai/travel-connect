import React from 'react';
import './EventsBlock.css'

const user_img = 'https://i.pinimg.com/originals/1f/28/c6/1f28c68d2c35f389966b5a363b992d06.png'

// Компонент для отзыва
const Review = ({ userImage, userReview }) => (
    <div className="review">
        <img src={userImage} alt="Пользователь" className="user-image" />
        <p className="user-review">{userReview}</p>
    </div>
);

// Компонент для карточки события
const EventCard = ({ image, title, description, date, reviews }) => (
    <div className="event-card">
        <img src={image} alt={title} className="event-image" />
        <h3 className="event-heading">{title}</h3>
        <p className="event-description">{description}</p>
        <p className="event-date">Дата: {date}</p>
        <div className="reviews">
            {reviews.map((review, index) => (
                <Review key={index} userImage={review.userImage} userReview={review.userReview} />
            ))}
        </div>
    </div>
);

// Основной компонент для блока последних событий
const EventsBlock = () => {
    const events = [
        {
            image: 'https://avatars.mds.yandex.net/i?id=778dcc89545ae76675e68a8d47b46ba9_l-4577184-images-thumbs&n=13',
            title: 'Абхазия',
            description: 'Путешествие в Абхазию привлекает туристов своими живописными местами. Многие посещают озеро Рица, наслаждаясь его красотой, а также исследуют Бзыбское и Юпшарское ущелья. В Новом Афоне можно увидеть монастырь и водопад, а в Пицунде — прекрасные пляжи и теплое море.',
            date: '25 декабря 2023',
            reviews: [
                { userImage: user_img, userReview: 'Отличное событие! Очень понравилось.' },
                { userImage: user_img, userReview: 'Замечательная организация и интересная программа.' },
            ],
        },
        {
            image: 'https://avatars.mds.yandex.net/get-mpic/1656415/img_id6416977695940031006.jpeg/orig',
            title: 'Франция',
            description: 'Во Франции туристы часто посещают Париж с его знаменитыми достопримечательностями, такими как Эйфелева башня и Лувр. Популярны также поездки в Нормандию, где можно увидеть живописные городки, и на Лаз урный берег, известный своими пляжами и ночной жизнью.',
            date: '30 декабря 2023',
            reviews: [
                { userImage: user_img, userReview: 'Невероятно! Я рекомендую всем.' },
                { userImage: user_img, userReview: 'Отличная атмосфера, буду ждать следующего!' },
            ],
        },
        {
            image: 'https://opis-cdn.tinkoffjournal.ru/mercury/main_out_shutterstock_250527814.4mqcem.jpg',
            title: 'Португалия',
            description: 'Путешествия в Португалию обычно начинаются с Лиссабона, где туристы наслаждаются красивыми местами и вкусной кухней. Популярны поездки в Порту с винными турами, пляжи Алгарве и сказочная Синтра.',
            date: '30 декабря 2023',
            reviews: [
                { userImage: user_img, userReview: 'Моя поездка в Португалию была просто незабываемой!' },
                { userImage: user_img, userReview: 'Пейзажи Португалии, были потрясающими, с красивыми пляжами и скалами.' },
            ],
        },
    ];

    return (
        <div className="events-section">
            <h2 className="events-title">Последние путешествия</h2>
            <div className="events-container">
                {events.map((event, index) => (
                    <EventCard key={index} {...event} />
                ))}
            </div>
        </div>
    );
};

export default EventsBlock;