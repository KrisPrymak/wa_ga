import React from 'react';
import style from './ChatList.module.css';
import { addCurrentNumber, chat } from '../../../store/mainSlice';
import Avatar from 'antd/es/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../store/store';

interface ChatListProps {
    chats: chat[]
}

const ChatList: React.FC<ChatListProps> = ({ chats }) => {

    const dispatch = useAppDispatch()
    const currentNumber = useAppSelector(state => state.mainSlice.currentNumber)

    const handleClick = (phoneNumber: number) => {
        dispatch(addCurrentNumber(phoneNumber))
    }

    return (
        <div className={style.chatList}>
            {chats.map((item, index) => {
                return (
                    <div className={currentNumber == item.phoneNumber ? style.curPhoneNumber : style.container} key={index} onClick={() => handleClick(item.phoneNumber)}>
                        <Avatar size={30} icon={<UserOutlined />} />
                        <span className={style.phoneNumber}>{item.phoneNumber}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default ChatList;