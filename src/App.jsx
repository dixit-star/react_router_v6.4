
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider }
  from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { About } from './About'
import { Contact, getFormData } from './Contact.jsx'
import { Service } from './Service'
import { AppLayout } from './components/layout/AppLayout'
import { ErrorPage } from './ErrorPage'
import { fetchData } from './components/API/FetchApi'
import { MoviDetails } from './MoviDetails'
import { getMovieDetaildata } from './GetMovieDetaildata'

function App() {

  //--new way
  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home />


        },
        {
          path: "/about",
          element: <About />

        },
        
        {
          path: "/service",
          element: <Service />,
          loader:fetchData,

          
        },
         {
          path: "/service/:movieID",
          element: <MoviDetails />,
          loader:getMovieDetaildata,
  
      
          
        },
        {
          path: "/contact",
          element: <Contact />,
          action:getFormData,
        },
      ]

    },

  ])

  return (
    <>
      <RouterProvider router={router}   />
    </>
  )

  //taditional way
  // const router= createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //     <Route path="/" element={<Home/>}/>
  //     <Route path="/about" element={<About/>}/>
  //     <Route path="/contact" element={<Contact/>}/>
  //     <Route path="/service" element={<Service/>}/>



  //     </Route>
  //   )
  // )
  // return(
  //   <>
  //   <RouterProvider router={router}/>

  //   </>
  // )

}

export default App
