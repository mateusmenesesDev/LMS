// Logo
import { SiSololearn } from 'react-icons/si';

import Navbar from './Navbar';
import { useState } from 'react';

export default function Header() {
  const [openNavbar, setOpenSidebar] = useState(false);

  function handleChangeSidebar() {
    if (window.innerWidth < 1024) setOpenSidebar((prevState) => !prevState);
  }

  console.log(openNavbar);

  return (
    <>
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start w-auto">
          <button className="btn btn-square btn-ghost">
            <SiSololearn className="scale-150" onClick={handleChangeSidebar} />
          </button>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl " href="/home">
            LMS
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="">Profile Name</a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar checked={openNavbar} />
    </>
  );
}
