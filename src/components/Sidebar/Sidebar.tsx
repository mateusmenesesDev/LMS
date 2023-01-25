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
import ListElements from './ListElements';
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
        {<ListElements />}
      </div>
    </aside>
  );
}
