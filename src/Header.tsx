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

export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="">
          <SiSololearn className="m-3 scale-150" />
          <BiHomeAlt className="m-3 scale-150" />
          <BiBookReader className="m-3 scale-150" />
          <IoSchoolOutline className="m-3 scale-150" />
          <BiBarChartAlt2 className="m-3 scale-150" />
          <HiOutlineDocumentReport className="m-3 scale-150" />
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
