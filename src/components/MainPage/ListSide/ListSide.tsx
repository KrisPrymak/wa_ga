import { Input } from 'antd';
import React, { useState } from 'react';
import ChatList from '../ChatList/ChatList';
import rabbitImg from './../../../media/rabbit.png';
import style from './ListSide.module.css';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { addCurrentNumber } from '../../../store/mainSlice';

const ListSide = () => {
    const chats = useAppSelector(state => state.mainSlice.chats)
    const { idInstance } = useAppSelector(state => state.mainSlice.auth)
    const [currentNumberInput, setCurrentNumberInput] = useState('')

    const dispatch = useAppDispatch()

    const handleAddNumber = () => {
        dispatch(addCurrentNumber(currentNumberInput))
        setCurrentNumberInput('')
    }

    return (
        <div className={style.list}>
            <div className={style.header}>
                <img src={rabbitImg} alt="rabbit avatar" />
                <span className={style.userName}>User: {idInstance}</span>
            </div>
            <div className={style.content}>
                <Input type={'number'} maxLength={11} value={currentNumberInput} onChange={(e) => setCurrentNumberInput(e.target.value)} placeholder='Номер телефона в формате 79XXXXXXXXX' onPressEnter={handleAddNumber} />
                <ChatList chats={chats} />
            </div>
        </div>
    );
};

export default ListSide;