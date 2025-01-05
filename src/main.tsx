import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { HomePage } from './routes'
import { Root } from './routes/__root'
import { ChainingPage } from './routes/chaining'
import { CombinationPage } from './routes/combination'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'chaining',
        element: <ChainingPage />,
      },
      {
        path: 'combination',
        element: <CombinationPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
