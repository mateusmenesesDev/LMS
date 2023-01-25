import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SecondayMenu from './components/SecondaryMenu/SecondaryMenu';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openSecondary, setOpenSecondary] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
      windowWidth > 1024 ? setOpenSidebar(true) : setOpenSidebar(false);
    });
  }, [openSidebar]);

  function handleOpenSidebar() {
    setOpenSidebar((prevState) => !prevState);
    if (!openSidebar) setOpenSecondary(false);
  }

  function handleOpenSecondary(event:React.MouseEvent<SVGElement, MouseEvent>, id:string) {
    // id and event are for setting custom elements in the Secondary Bar
    console.log(event.target, id);
    setOpenSecondary((prevState) => !prevState);
  }

  console.log(openSecondary);

  return (
    <>
      <Header onClick={handleOpenSidebar} />
      <div className="relative h-screen lg:flex">
        <Sidebar checked={openSidebar} onClick={handleOpenSecondary} />
        <SecondayMenu sidebarOpen={openSecondary} />
        <div className="h-52 text-center w-full grid place-items-center">Page content</div>
      </div>
    </>
  );
}

export default App;
