import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Course from '../pages/Course/Course';
import Courses from '../pages/Course/courses/index';
import Login from '../pages/Login/Login';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Courses />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Course />} path='/course' />
      </Routes>
    </BrowserRouter>
  );
}
