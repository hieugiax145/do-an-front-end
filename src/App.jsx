import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router.jsx' // Adjust the path as necessary
import './App.css'

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
