import './App.css'
import { Route, Routes } from 'react-router'
import AddCourse from './views/admin/AddCourse'
import Landing from './views/landing/Landing'
import CoursesList from './views/admin/CoursesList'
import 'react-toastify/dist/ReactToastify.css';
import UpdateCourse from './views/admin/UpdateCourse'
import Login from './views/auth/Login'
import ProtectedRoutes from './layout/ProtectedRoutes'
import Navbar from './layout/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/add" element={<ProtectedRoutes><AddCourse /></ProtectedRoutes>} />
        <Route path='/courses_list' element={<ProtectedRoutes> <CoursesList /></ProtectedRoutes>} />
        <Route path='/update_course/:id' element={<ProtectedRoutes><UpdateCourse /></ProtectedRoutes>} />
      </Routes></>




  )
}

export default App
