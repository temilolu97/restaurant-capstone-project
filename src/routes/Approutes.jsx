import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes'

const Approutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            {routes.map(route=>(
                <Route  path={route.path} element={route.component} />
            ))}
        </Routes>
    </BrowserRouter>
  )
}

export default Approutes
