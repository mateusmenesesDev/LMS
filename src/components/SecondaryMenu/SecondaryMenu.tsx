type Props = {
  sidebarOpen: boolean;
};

export default function SecondayMenu({ sidebarOpen }: Props) {
  const show = sidebarOpen ? 'translate-x-16' : '-translate-x-72';

  return (
    <div className={`bg-neutral w-72 absolute h-full ${show} transition-all`}>
      <span className="m-4">Secondary Menu</span>
    </div>
  );
}
