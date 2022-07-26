import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';
import AppRouter from './router/router';
import { Spacer, Card, Grid, Text } from "@nextui-org/react";
import Silde from './pages/slide';
import io from 'socket.io-client'


const socket = io('http://localhost:3000',{withCredentials: true,});

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState('');
  
  
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong('2343');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
    <NextUIProvider>
      <div className="App">
        <Card >
          <Card.Header>
            <Header />
          </Card.Header>
          <div className='body'>
            <Router>
              <Silde />
              <Routes>
                {
                  AppRouter.map((route, key) => {
                    return (
                      <Route
                        key={key}
                        path={route.path}
                        element={<route.component />}
                      />
                    )
                  })
                }
              </Routes>
            </Router>
          </div>
        </Card>
      </div>
    </NextUIProvider>
  )
}

export default App
