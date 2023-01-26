import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Course from '../pages/Course/Course';
import Courses from '../pages/Course/courses/Index';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Course />} path='/course' />
        <Route element={<Courses />} path='/' />
      </Routes>
    </BrowserRouter>
  );
}
