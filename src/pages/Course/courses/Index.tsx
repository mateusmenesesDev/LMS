import Card from './card';
import InfoCard from './infoCard';

function Courses() {
  return (
    <div className='m-auto flex justify-center flex-center flex-col gap-5'>
      <div className='mb:w-5/6 m-auto flex flex-col w-full'>
        <div className="flex p-5">
          <div className="flex flex-col gap-5">
            <h2 className='font-bold text-3xl'>Hola, Nigel</h2>
            <div className="flex flex-col gap-2">
              <h3 className='font-bold text-2xl'>Mi progreso</h3>
              <p>Del 2 al 8 de enero:</p>
            </div>
            <div className='w-full flex flex-wrap gap-5 justify-center'>
              <InfoCard />
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
          </div>
        </div>
        <div className='p-5 flex flex-wrap gap-5 w-full justify-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Courses;
