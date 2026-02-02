
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider }
  from 'react-router-dom'
import './App.css'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Service } from './Service'
import { AppLayout } from './components/layout/AppLayout'

function App() {

  //--new way
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
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
          element: <Service />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]

    },

  ])

  return (
    <>
      <RouterProvider router={router} />
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
