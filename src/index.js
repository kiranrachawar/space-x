import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './Home/Home';
import Header from './Home/Header';
import Rocket from './rocket/Rocket';
import Launches from './launches/Lanches';
import Capsules from './capsules/Capsules';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "rockets",
    element: <Rocket />,
  },
  {
    path: "launches",
    element: <Launches />,
  },
  {
    path: "capsules",
    element: <Capsules />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
