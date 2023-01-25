import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
      windowWidth > 1024 ? setOpenSidebar(true) : setOpenSidebar(false);
    });
  }, [openSidebar]);

  // console.log(windowWidth);

  function handleSidebar() {
    setOpenSidebar((prevState) => !prevState);
  }

  return (
    <>
      <Header onClick={handleSidebar} />
      <div className="relative h-screen lg:flex">
        <Sidebar checked={openSidebar} />
        <div className="h-52 text-center w-full">Page content</div>
      </div>
    </>
  );
}

export default App;
