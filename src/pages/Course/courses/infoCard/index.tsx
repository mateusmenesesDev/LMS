import { FiPlayCircle } from 'react-icons/fi';

function InfoCard() {
  return (
    <div className="text-neutral-content flex items-center w-full sm:w-[170px] gap-4 bg-neutral rounded-xl h-20 p-5">
      <div className="bg-blue-500 w-10 h-10 flex items-center justify-center rounded-md">
        <FiPlayCircle className="text-primary-focus" size={20} />
      </div>
      <div>
        <h3 className="font-semibold">5 classes</h3>
        <p>Vistas</p>
      </div>
    </div>
  );
}

export default InfoCard;
