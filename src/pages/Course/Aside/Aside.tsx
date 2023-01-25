import React, { useState } from 'react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import ClasseList from './ClasseList/ClasseList';
export default function Aside() {
  const [aside, setAside] = useState(false);
  return (
    <>
      <div
        className='btn w-1 fixed right-0 bottom-[50%] md:hidden'
        onClick={() => setAside(true)}
      >
        {'<'}
      </div>
      <div
        className={`${aside ? 'w-screen' : 'w-0'} right-0 top-0 absolute h-full
        md:w-[280px] md:static bg-neutral md:max-h-[493px] fullhd:w-[400px] md:overflow-auto md:rounded-xl
         scrollbar-thin scrollbar-thumb-base-200 ease-in-out duration-300 z-30`}
      >
        <div className='btn md:hidden' onClick={() => setAside(false)}>
          X
        </div>
        <div className='font-bold text-xl text-center mb-16'>AULAS</div>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 01 - Aprendendo HTML
        </ClasseList>
        <ClasseList active Icon={MdOutlineSlowMotionVideo}>
          Aula 02 - Como usar CSS{' '}
        </ClasseList>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 03 - O que é um framework?
        </ClasseList>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 04 - Início do React
        </ClasseList>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 04 - Início do React
        </ClasseList>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 04 - Início do React
        </ClasseList>
        <ClasseList Icon={MdOutlineSlowMotionVideo}>
          Aula 04 - Início do React
        </ClasseList>
      </div>
    </>
  );
}
