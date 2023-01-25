import { useState } from 'react';
import {
  AiOutlineClockCircle,
  AiOutlineDownload,
  AiOutlineFilePdf,
} from 'react-icons/ai';
import Activities from './Activities/Activities';
import Aside from './Aside/Aside';

type Props = {
  materials?: { object: any }[];
};
export default function Course({ materials }: Props) {
  const [tab, setTab] = useState(1);
  return (
    <div className='lg:pt-5 flex md:gap-5 justify-center'>
      <div className='max-w-5xl'>
        <video controls className='w-full'>
          <source src='src/assets/sample-video.mp4' type='video/mp4' />
        </video>
        <div className='bg-primary text-primary-content py-5'>
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
          <div className='mt-8 px-2'>
            <div>
              {tab === 1 ? (
                <div>
                  <div className='bg-secondary text-secondary-content font-bold text-sm p-5 rounded-xl flex items-center gap-2'>
                    <AiOutlineFilePdf size={26} />
                    <div>Coletar Moodboard através do Dribble.com</div>
                    <AiOutlineDownload size={32} />
                  </div>
                </div>
              ) : (
                <Activities />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Aside />
        <div className='hidden mt-5 p-5 md:block  bg-neutral rounded-xl'>
          <div className='mb-4'>Cursos Relacionados</div>
          <div>Card</div>
        </div>
      </div>
    </div>
  );
}
