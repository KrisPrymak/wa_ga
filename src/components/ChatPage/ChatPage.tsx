import React from 'react';
import style from './ChatPage.module.css';
import SendInput from './SendInput/SendInput';
import { useAppSelector } from '../../store/store';
import Messages from './Messages/Messages';

const ChatPage: React.FC = () => {

    const chats = useAppSelector(state => state.mainSlice.chats)
    const currentNumber = useAppSelector(state => state.mainSlice.currentNumber)

    return (
        <div>
            <Messages currentNumber={currentNumber} chats={chats} />
            <div className={style.container}>
                <SendInput />
            </div>
        </div>
    )
};

export default ChatPage;