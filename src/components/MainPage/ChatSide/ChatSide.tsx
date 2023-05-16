import React from 'react';
import { useAppSelector } from '../../../store/store';
import style from './ChatSide.module.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ChatPage from '../../ChatPage/ChatPage';
import WaPlug from '../../WaPlug/WaPlug';

const ChatSide = () => {
    const currentNumber = useAppSelector(state => state.mainSlice.currentNumber)
    return (
        <div className={style.chat}>
            <div className={style.header}>
                {currentNumber ? <p> <Avatar size={40} icon={<UserOutlined />} /> {currentNumber}</p> : ' Выберите чат или создайте новый'}
            </div>
            <div className={style.chat__content}>
                {currentNumber ? <ChatPage /> : <WaPlug />}
            </div>
        </div>
    );
};

export default ChatSide;