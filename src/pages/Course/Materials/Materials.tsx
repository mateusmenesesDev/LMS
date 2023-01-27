import React from 'react';
import { AiOutlineDownload, AiOutlineFilePdf } from 'react-icons/ai';

export default function Materials() {
  return (
    <div>
      <div className='bg-secondary text-secondary-content font-bold text-sm p-5 rounded-xl flex items-center gap-2'>
        <AiOutlineFilePdf size={26} />
        <div>Coletar Moodboard através do Dribble.com</div>
        <AiOutlineDownload size={32} />
      </div>
    </div>
  );
}
