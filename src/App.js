import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

export { router };
