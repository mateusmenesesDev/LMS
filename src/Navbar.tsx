export default function Navbar(props: {checked: boolean;}) {

  return (
    <div className="drawer drawer-mobile bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={props.checked} />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      
      </div>
    </div>
  );
}