// Home
import { BiHomeAlt } from 'react-icons/bi';
// My Courses
import { BiBookReader } from 'react-icons/bi';
// My School
import { IoSchoolOutline } from 'react-icons/io5';
// Analytics
import { BiBarChartAlt2 } from 'react-icons/bi';
// Reports
import { HiOutlineDocumentReport } from 'react-icons/hi';

type Props = {
  checked: boolean;
}

export default function Navbar({ checked }:Props) {

  return (
    <div className="drawer drawer-mobile bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={checked} />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <div>Testando aqui</div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu w-16 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><a><BiHomeAlt className='scale-150 mx-auto h-10' /></a></li>
          <li><a><BiBookReader className='scale-150 mx-auto h-10' /></a></li>
          <li><a><IoSchoolOutline className='scale-150 mx-auto h-10' /></a></li>
          <li><a><BiBarChartAlt2 className='scale-150 mx-auto h-10' /></a></li>
          <li><a><HiOutlineDocumentReport className='scale-150 mx-auto h-10' /></a></li>
        </ul>
      
      </div>
    </div>
  );
}