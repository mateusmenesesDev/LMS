// Logo
import { SiSololearn } from "react-icons/si";
// Home
import { BiHomeAlt } from "react-icons/bi";
// My Courses
import { BiBookReader } from "react-icons/bi";
// My School
import { IoSchoolOutline } from "react-icons/io5";
// Analytics
import { BiBarChartAlt2 } from "react-icons/bi";
// Reports
import { HiOutlineDocumentReport } from "react-icons/hi";
import Navbar from './Navbar';
import { useState } from "react";

export default function Header() {
  const [ openNavbar, setOpenNavbar ] = useState(false);

  function handleChangeNavbar() {
    setOpenNavbar(prevState => !prevState);
  }

  console.log(openNavbar);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <SiSololearn className="scale-150" onClick={handleChangeNavbar}/>
            
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl " href="/home">LMS</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Navbar 
        checked={openNavbar}
      />
    </>
  );
}
