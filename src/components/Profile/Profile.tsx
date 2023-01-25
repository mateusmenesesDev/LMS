export default function Profile() {
  return (
    <div className="dropdown dropdown-bottom dropdown-end justify-self-end self-center">
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
  );
}
