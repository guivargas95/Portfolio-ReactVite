import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import Noticias from './pages/Noticias';
import Page2 from "./pages/Page2";
import './reset.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
