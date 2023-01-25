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
// import { useState, useEffect } from 'react';

type Props = {
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
};

export default function Sidebar({ checked, onClick }: Props) {
  // useEffect(() => {
  //   if (window.innerWidth=)
  // }, [checked]);

  const left = window.innerWidth > 1024 ? '' : checked ? '' : '-translate-x-16';

  return (
    <aside
      className={`drawer drawer-mobile w-16 h-full bg-neutral absolute ${left} transition-all lg:relative z-10 basis-[68px]`}
    >
      <div className="">
        <ul className="w-16 text-base-content bg-neutral">
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiHomeAlt
              id="1"
              className="scale-150 mx-auto h-10"
              onClick={(event) => onClick(event, 1)}
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiBookReader
              id="2"
              className="scale-150 mx-auto h-10"
              onClick={(event) => onClick(event, 2)}
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <IoSchoolOutline
              id="3"
              className="scale-150 mx-auto h-10"
              onClick={(event) => onClick(event, 3)}
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <BiBarChartAlt2
              id="4"
              className="scale-150 mx-auto h-10"
              onClick={(event) => onClick(event, 4)}
            />
          </li>
          <li className="btn w-16 h-16 bg-neutral border-0">
            <HiOutlineDocumentReport
              id="5"
              className="scale-150 mx-auto h-10"
              onClick={(event) => onClick(event, 5)}
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
