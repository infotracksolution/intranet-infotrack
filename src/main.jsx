import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import App from './App.jsx'
import Sop from './pages/Sop.jsx'
import Profiles from './pages/Profiles.jsx'
import Documents from './pages/Documents.jsx'
import Schedule from './pages/Schedule.jsx'
import Internal from './pages/Internal.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/sop' element={<Sop />}/>
      <Route path='/workers' element={<Profiles />}/>
      <Route path='/rules' element={<Internal />} />
      <Route path='/documents' element={<Documents />}/>
      <Route path='*' element={<App />}/>
    </Routes>
  </BrowserRouter>,
)
