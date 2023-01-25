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
import React from 'react';
// import ListElements from './ListElements';
// import { useState, useEffect } from 'react';

type Props = {
  checked: boolean;
  onClick: (event: React.MouseEvent<EventTarget>) => void;
};

export default function Sidebar({ checked, onClick }: Props) {

  const left = window.innerWidth > 1024 ? '' : checked ? '' : '-translate-x-16';

  return (
    <aside
      className={`drawer drawer-mobile w-16 h-full bg-neutral absolute ${left} transition-all lg:relative z-10 basis-[68px]`}
    >
      <div className="">
        <ul className="w-16 text-base-content bg-neutral">
          <li className="btn w-16 h-16 bg-neutral border-0 p-0 rounded-none" id="home" onClick={onClick}>
            <BiHomeAlt
              className="w-full h-full scale-[40%]"
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0 p-0 rounded-none" id="courses" onClick={onClick}>
            <BiBookReader
              className="w-full h-full scale-[40%]"
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0 p-0 rounded-none" id="school" onClick={onClick}>
            <IoSchoolOutline
              className="w-full h-full scale-[40%]"
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0 p-0 rounded-none" id="analytics" onClick={onClick}>
            <BiBarChartAlt2
              className="w-full h-full scale-[40%]"
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0 p-0 rounded-none" id="reports" onClick={onClick}>
            <HiOutlineDocumentReport
              className="w-full h-full scale-[40%]"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
