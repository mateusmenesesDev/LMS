import { IconType } from 'react-icons';
import { BsCircle } from 'react-icons/bs';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';

type Props = {
  active?: boolean;
  Icon: IconType;
  children: React.ReactNode;
};
export default function ClasseList({ active, Icon, children }: Props) {
  return (
    <div
      className={`py-3 flex items-center px-4 gap-3 ${
        active && 'bg-accent text-accent-content border-y-2 border-gray'
      } `}
    >
      <BsCircle size={18} />
      <div>
        <div className='flex gap-2 mb-1'>
          <Icon size={22} />
          <div className='text-sm font-medium'>{children}</div>
        </div>
        <div className='text-xs'>{'(03:00)'}</div>
      </div>
    </div>
  );
}
