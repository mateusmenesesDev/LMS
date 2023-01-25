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
import { useState, useEffect } from 'react';

export default function Sidebar({ checked }: { checked: boolean }) {
  // useEffect(() => {
  //   if (window.innerWidth=)
  // }, [checked]);

  const left = window.innerWidth > 1024 ? '' : checked ? '' : '-translate-x-16';

  return (
    <aside
      className={`drawer drawer-mobile w-16 h-full bg-neutral absolute ${left} transition-all`}
    >
      <div className="drawer-side">
        <ul className="w-16 text-base-content bg-neutral">
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiHomeAlt className="scale-150 mx-auto h-10" />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiBookReader className="scale-150 mx-auto h-10" />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <IoSchoolOutline className="scale-150 mx-auto h-10" />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiBarChartAlt2 className="scale-150 mx-auto h-10" />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <HiOutlineDocumentReport className="scale-150 mx-auto h-10" />
          </li>
        </ul>
      </div>
    </aside>
  );
}
