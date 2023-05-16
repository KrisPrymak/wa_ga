import React, { useEffect } from 'react';
import style from './MainPage.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getMessage } from '../../store/mainSlice';
import ListSide from './ListSide/ListSide';
import ChatSide from './ChatSide/ChatSide';

const MainPage = () => {
    const {idInstance, apiTokenInstance} = useAppSelector(state => state.mainSlice.auth)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMessage({idInstance, apiTokenInstance}))
    }, [])

    useEffect(() => {

        const id = setInterval(() => {
            dispatch(getMessage({idInstance, apiTokenInstance}))
        }, 20000);

        return () => {
            clearInterval(id)
        }
    }, [])

    return (
        <div className={style.main}>
            <ListSide /> 
            <ChatSide />
        </div>
    );
};

export default MainPage;