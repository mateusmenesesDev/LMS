import { useState } from 'react';
import {
  AiOutlineClockCircle,
  AiOutlineDownload,
  AiOutlineFilePdf,
} from 'react-icons/ai';
import Card from '../../components/Card';
import Activities from './Activities/Activities';
import Aside from './Aside/Aside';

export default function Course() {
  const [tab, setTab] = useState(1);
  return (
    <div className='flex justify-center md:px-2 md:gap-5 lg:pt-5   '>
      <div className='max-w-5xl'>
        <video controls className='w-full rounded-t-lg'>
          <source src='src/assets/sample-video.mp4' type='video/mp4' />
        </video>
        <div className='bg-neutral rounded-b-lg  py-5'>
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
        <div
          className='hidden md:block max-w-[280px] max-h-[379px] mb-14 overflow-auto fullhd:max-w-none fullhd:w-[400px] mt-5 p-5 
                        bg-neutral text-neutral-content rounded-xl'
        >
          <div className='mb-4'>Cursos Relacionados</div>
          <div className='grid gap-5'>
            <div className='max-w-[340px]'>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
