import { SiSololearn } from 'react-icons/si';
import Profile from './Profile';

type Props = {
  onClick: React.MouseEventHandler<HTMLLIElement>;
};

export default function Header({ onClick }: Props) {
  return (
    <nav className="w-screen h-16 bg-neutral grid grid-cols-3 align-middle">
      <li className="btn w-16 h-16 rounded-none" onClick={onClick}>
        <SiSololearn className="justify-self-start self-center scale-150" />
      </li>
      <span className="justify-self-center self-center text-2xl">LMS</span>
      <Profile />
    </nav>
  );
}
