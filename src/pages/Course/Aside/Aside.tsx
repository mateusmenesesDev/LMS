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
        className={`${
          aside ? 'block' : 'hidden'
        } w-screen left-0 top-0 absolute h-screen md:block md:static bg-neutral max-w-xl`}
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
      </div>
    </>
  );
}
