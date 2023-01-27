import { useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Activities from '../Activities/Activities';
import Materials from '../Materials/Materials';

export default function ClassExtras() {
  const [tab, setTab] = useState(1);
  return (
    <div className='bg-neutral rounded-b-lg py-5'>
      <div className='flex justify-between items-center px-4 mb-9'>
        <h3 className='font-bold text-base md:text-xl'>
          Introdução ao Product Design
        </h3>
        <div className='border border-whit rounded-md p-1'>
          <AiOutlineClockCircle />
        </div>
      </div>
      <div className='tabs'>
        <a
          className={`tab ${tab === 1 && 'tab-active tab-bordered'} `}
          onClick={() => setTab(1)}
        >
          Materiais
        </a>
        <a
          className={`tab ${tab === 2 && 'tab-active tab-bordered'} `}
          onClick={() => setTab(2)}
        >
          Atividades
        </a>
      </div>
      <div className='mt-8 px-10'>
        {tab === 1 ? <Materials /> : <Activities />}
      </div>
    </div>
  );
}
