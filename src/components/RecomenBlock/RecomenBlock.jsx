import React, { useEffect, useState } from 'react';
import './RecomenBlock.css'; // Импортируем стили

const RecomenBlock = () => {
    const items = [
        {
            imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7e/7d/2c/pyramids-of-giza.jpg?w=1200&h=1200&s=1',
            description: 'Египет — это удивительное направление для путешествий, известное своими древними памятниками, такими как пирамиды и Сфинкс, а также великолепными курортами на Красном и Средиземном морях. Здесь можно наслаждаться пляжным отдыхом, дайвингом и экскурсиями по историческим местам.',
        },
        {
            imgSrc: 'https://cdn.tripster.ru/thumbs2/9133db92-156a-11ec-90f4-5ea3a849f532.800x600.jpg',
            description: 'Дубай — это захватывающее направление для путешествий, славящееся своими современными архитектурными шедеврами, такими как Бурдж Халифа и Пальма Джумейра. Город предлагает роскошные курорты, великолепные пляжи и разнообразные развлечения для туристов. Здесь можно наслаждаться шопингом в крупнейших торговых центрах, такими как Dubai Mall, а также исследовать исторические районы, такие как Бур Дубай и Дейра.',
        },
        {
            imgSrc: 'https://m.bk55.ru/fileadmin/bkinform/bk_info_77858_orig_1467353073.png',
            description: 'Турция: Известна своими великолепными пляжами, историческими памятниками и гостеприимством. Кемер, Анталия и Бодрум предлагают отличные условия для отдыха, а также богатую культуру и вкусную кухню.',
        },
        {
            imgSrc: 'https://cdn-edge.kwork.ru/pics/t3/81/815755-1548615381.jpg',
            description: 'Россия: Черноморское побережье, включая Сочи и Анапа, привлекает туристов своими пляжами и курортами. Здесь можно насладиться как пляжным отдыхом, так и культурными мероприятиями.',
        },
        {
            imgSrc: 'https://avatars.mds.yandex.net/i?id=f0738435a28dc60ec07986e011379bf3_l-4488637-images-thumbs&n=13',
            description: 'Абхазия: Прекрасные горы и чистое море делают Абхазию привлекательным местом для отдыха. Местные курорты предлагают уютные пляжи и возможность насладиться природой.',
        },
        {
            imgSrc: 'https://i.pinimg.com/originals/78/f8/f0/78f8f087720bec8ab673170ff928c9d4.jpg',
            description: 'Тунис: Сочетание арабской и европейской культур, великолепные пляжи и исторические памятники, такие как Карфаген, делают Тунис уникальным направлением для отдыха.',
        },
        {
            imgSrc: 'https://i.cortur.travel/img/hotels/83234/0.jpg',
            description: 'Республика Доминикана: Известна своими белоснежными пляжами и кристально чистыми водами. Пунта-Кана и Баваро предлагают множество курортов и активных развлечений.',
        },
        {
            imgSrc: 'https://avatars.mds.yandex.net/i?id=b6f1bb7948d57c6ce800ca20b85b8771_l-5299366-images-thumbs&n=13',
            description: 'Куба: Привлекает туристов своим уникальным шармом, исторической архитектурой и живописными пляжами. Варадеро и Гавана — популярные направления для отдыха.',
        },
        {
            imgSrc: 'https://www.airpano.ru/photogallery/images_1550/383_898508.jpg',
            description: 'Мальдивы: Это идеальное место для романтического отдыха и медового месяца. Уединенные бунгало на воде, белоснежные пляжи и коралловые рифы создают атмосферу рая.',
        },
        {
            imgSrc: 'https://stafftravel.voyage/_assets/WGJNbEwxdjErb1RzMDN5MkJEazdBUT09',
            description: 'Таиланд: Известен своими экзотическими пляжами, тропической природой и богатой культурой. Пхукет, Краби и Ко Самуи предлагают разнообразные возможности для отдыха и приключений.',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000); // Переключение каждые 2 секунды

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании
    }, [items.length]);

    return (
        <div className="carousel">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <div className="carousel-image">
                        <img src={item.imgSrc} alt={`Рекомендуемое место ${index + 1}`} />
                    </div>
                    <div className="carousel-description">
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecomenBlock;