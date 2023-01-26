import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SecondayMenu from '../SecondaryMenu/SecondaryMenu';
import Sidebar from '../Sidebar/Sidebar';

function PageContent({ children }: { children: React.ReactNode }) {
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
    if (openSidebar) setOpenSecondary(false);
  }

  function handleOpenSecondary(/*event: React.MouseEvent<EventTarget>*/) {
    // id and event are for setting custom elements in the Secondary Bar
    // const { id } = (event.currentTarget as HTMLLIElement);

    setOpenSecondary((prevState) => !prevState);
  }

  // console.log(openSecondary);

  return (
    <>
      <Header onClick={handleOpenSidebar} />
      <div className='relative h-[calc(100vh-64px)] lg:flex gap-0'>
        <Sidebar checked={openSidebar} onClick={handleOpenSecondary} />
        <SecondayMenu sidebarOpen={openSecondary} />
        <div className='w-full'>{children && children}</div>
      </div>
    </>
  );
}

export default PageContent;
