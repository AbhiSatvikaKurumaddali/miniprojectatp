import {createBrowserRouter,RouterProvider} from 'react-router'
import RootLayout from './components/RootLayout'
import Home from "./components/Home"
import CreateEmp from "./components/CreateEmp"
import List from "./components/List"
import Employee from "./components/Employee";
import EditEmployee from "./components/EditEmployee";


function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },

        {
          path: "/CreateEmp",
          element: <CreateEmp />,
        },
        {
          path: "/List",
          element: <List />,
        },
        {
          path: "/Employee",
          element: <Employee />,
        },
        {
          path: "/EditEmployee",
          element: <EditEmployee />,
        },
      ],
    },
  ]);
  return (
  <RouterProvider router={routerObj}/>
)
}


export default App