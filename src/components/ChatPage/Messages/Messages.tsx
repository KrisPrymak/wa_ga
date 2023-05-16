import React, { useEffect } from 'react';
import style from './Messages.module.css';
import { chat } from '../../../store/mainSlice';

interface MessagesProps {
    currentNumber: number | null,
    chats: chat[]
}

const Messages: React.FC<MessagesProps> = ({ currentNumber, chats }) => {

    const currentChat = (chats.filter(item => item.phoneNumber == currentNumber))[0]


    return (
        <div>
            {currentChat && currentChat.messagesList.map((i, index) => {
                return (
                    <div key={index} className={style.container}>
                        {i.from === 'me' ? <span className={style.message}>
                            {i.text}
                        </span> : <span className={style.interlocutor}>
                            {i.text}
                        </span>}
                    </div>
                )
            })}
        </div>
    );
};

export default Messages;