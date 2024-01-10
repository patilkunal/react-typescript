import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeComponent } from './components/Home';
import { HomeChild } from './components/HomeChild';
import { LinkComponent } from './components/Link';
import Login from './components/Login';
import Registration from './components/Registration';
//import reportWebVitals from './reportWebVitals';
const myrouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <div><h1>Welcome to this demo application</h1></div>
      },
      {
        path: 'home',
        Component: HomeComponent,
        children: [
          {
            path: 'child/:childId',
            Component: HomeChild
          }
        ]
      },
      {
        path: 'link',
        Component: LinkComponent
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Registration
      }
    ]
  },
  {
    path: '/*',
    element: <div>Page not found. No such page exists!</div>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={myrouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
