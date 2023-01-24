import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Course from '../pages/Course/Course';

export default function RouteList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Course />} path='/course' />
      </Routes>
    </BrowserRouter>
  );
}
