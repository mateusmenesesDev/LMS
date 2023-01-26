import { FiBookOpen, FiWatch } from 'react-icons/fi';

function Card({ desc, progress }: { desc?: string; progress?: string }) {
  return (
    <div className='card bg-neutral text-neutral-content shadow-xl rounded-2xl max-w-sm'>
      <figure>
        <img
          src='https://placeimg.com/400/225/arch'
          className='w-full'
          alt='Shoes'
        />
      </figure>
      <div className='card-body p-5'>
        <h2 className='card-title'>Logo Design</h2>
        <p>{desc}</p>
        <div className='flex gap-4 p-0'>
          <div className='flex gap-1 items-center text-xs'>
            {' '}
            <FiBookOpen className='text-primary' size={18} /> 15 lessons
          </div>
          <div className='flex gap-1 items-center text-xs'>
            {' '}
            <FiWatch className='text-primary ' size={18} /> 4 hours
          </div>
        </div>
        {progress && (
          <div className='w-full flex items-center justify-between'>
            <progress
              className='progress progress-success w-4/5'
              value={progress}
              max='100'
            />
            <span>{progress}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
