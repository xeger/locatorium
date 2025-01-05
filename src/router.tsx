import { createBrowserRouter } from 'react-router-dom'

import './index.css'
import { HomePage } from './routes'
import { Root } from './routes/__root'
import { ChainingPage } from './routes/chaining'
import { CombinationPage } from './routes/combination'
import { InteractivityPage } from './routes/interactivity'

export const ROUTES = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'interactivity',
        element: <InteractivityPage />,
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
]

export const router = createBrowserRouter(ROUTES)
