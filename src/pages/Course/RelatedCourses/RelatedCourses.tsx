import React from 'react';
import Card from '../../../components/Card';

export default function RelatedCourses() {
  return (
    <div
      className='hidden md:block max-w-[280px] max-h-[379px] mb-14 overflow-auto scrollbar-thin scrollbar-thumb-base-100 fullhd:max-w-none fullhd:w-[400px] mt-5 p-5 
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
  );
}
