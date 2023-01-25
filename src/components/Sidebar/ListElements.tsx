// Home
import { allElements, liClasses, iconClasses } from './sidebarElementsList';

type Obj = {
  icon: string;
  id: string;
}

export default function ListElements() {
  const fullList = allElements.map((element: any) => {
    <li className={liClasses} id={element.id} onClick={{'onClick'}}>
      <{element.icon}
        className={iconClasses}
      />
    </li>
  });
  return (
    <ul>
      {fullList}
    </ul>
  );
}