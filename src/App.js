import {
  createBrowserRouter,
  RouterProvider,
 
  Outlet
} from "react-router-dom";
import './App.css';
import Homepage from './pages/HomePage/Homepage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import CoursesPage from './pages/CoursesPage/CoursesPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PythoncoursePage from "./pages/PythoncoursePage/PythoncoursePage";
import CourseRecommendationPage from "./pages/CourseRecommendationPage/CourseRecommendationPage";
import Cppcoursepage from "./pages/Cppcoursepage/Cppcoursepage";
import Dashboard from "./pages/Dashboard/Dashboard";
import JavacoursePage from "./pages/JavacoursePage/JavacoursePage";
import PythoncourseTest from "./pages/PythoncourseTest/PythoncourseTest";
import LandingBeforeLogin from "./pages/LandingBeforeLogin/LandingBeforeLogin";


function Layout() {
  return (
    
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>


  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/aboutpage",
        element:<AboutPage/>
      },
      {
        path:"/coursespage",
        element:<CoursesPage/>
      },

      {
        path:"/pythoncoursepage",
        element:<PythoncoursePage/>
      },
  
      {
        path:"/courserecomment",
        element:<CourseRecommendationPage/>
      },
      
      {
        path:"/cppcoursepage",
        element:<Cppcoursepage/>
      },

      {
        path:"/dashboard",
        element:<Dashboard/>
      },

      {
        path:"/javacoursepage",
        element:<JavacoursePage/>
      },

      {
        path:"/landingbeforelogin",
        element:<LandingBeforeLogin/>
      },

      
      
      
  
  
   ]
  },
  {
    path: "/loginpage",
    element: <LoginPage/>,
  },

  {
    path: "/signuppage",
    element: <SignupPage/>,
  },


  {
    path:"/pythoncoursetest",
    element:<PythoncourseTest/>
  },
  

  
  
]);
// function App() {
//   return (
//     <>

//       <Navbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Homepage />} />
//           <Route path='/aboutpage' element={<AboutPage />} />
//           <Route path='/coursespage' element={<CoursesPage />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer />
//     </>
//   );
// }

// export default App;
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;