import React from 'react';
import style from './WaPlug.module.css';
import waImg from './../../media/whatsapp.png';

const WaPlug = () => {
    return (
        <div className={style.waContainer}>
                    <img className={style.waImg} src={waImg} alt="whatsapp" />
                    <span className={style.waText}>Отправляйте сообщения удобным для вас способом</span>
                </div>
    );
};

export default WaPlug;