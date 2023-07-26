import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { NativeBaseProvider } from 'native-base';
import HomePage from './pages/homePage/HomePage';


export default function App() {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
}


