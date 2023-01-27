import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Course from '../pages/Course/Course';
import Courses from '../pages/Courses';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Courses />} path='/' />
        <Route element={<Course />} path='/course' />
      </Routes>
    </BrowserRouter>
  );
}
