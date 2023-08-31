import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Card, Fab, Grid } from '@mui/material'
import Board from "./assets/Board.jsx"
import Header from './assets/Header'

function App() {
  return (
    <>
      <Header />
      <Board />
    </>
  )
}

export default App
