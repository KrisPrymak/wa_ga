import React from 'react';
import './App.css';
import AuthForm from './components/AuthForm/AuthForm';
import { useAppSelector } from './store/store';
import MainPage from './components/MainPage/MainPage';

function App() {
  const { apiTokenInstance, idInstance } = useAppSelector(state => state.mainSlice.auth)
  return (
    <div className="App">
      <div className="green"></div>
      <div className="grey"></div>
      <div className="main">
        {apiTokenInstance && idInstance ?
          <MainPage /> : <AuthForm />}
      </div>
    </div>
  );
}

export default App;
