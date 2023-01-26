import {FiBookOpen, FiWatch} from 'react-icons/fi';

function Card() {
  return ( 
    <div className="card w-96 bg-neutral text-neutral-content shadow-xl rounded-2xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
            Logo Design
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore labore blanditiis sint ut, nisi quam, beatae accusamus </p>
        <div className="flex gap-4">
          <div className='flex gap-1 items-center'> <FiBookOpen className="text-primary" size={18} /> 15 lessons</div>
          <div className='flex gap-1 items-center'> <FiWatch className="text-primary" size={18} /> 4 hours</div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <progress className="progress progress-success w-4/5" value="30" max="100"/>
          <span>30%</span>
        </div>
      </div>
    </div>
  );
}

export default Card;