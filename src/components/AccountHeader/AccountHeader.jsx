import React from 'react';
import './AccountHeader.css'; // Подключаем CSS файл для стилизации

const AccountHeader = ({ user }) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src={user.avatar} alt="Avatar" className="avatar" />
                <div className="user-info">
                    <h2 className="user-name">{user.name}</h2>
                </div>
            </div>
            <div className="header-right">
                <p className="contact-info">{user.contact}</p>
            </div>
        </header>
    );
};

export default AccountHeader;