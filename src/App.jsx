import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, Settings, User, Error } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'user',
        element: <User />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
