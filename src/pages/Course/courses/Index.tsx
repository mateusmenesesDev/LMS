import Card from '../../../components/card';
import InfoCard from './infoCard';

function Courses() {
  return (
    <div className='m-auto flex justify-center flex-center flex-col gap-5'>
      <div className='flex flex-col w-full'>
        <div className="p-5 flex relative">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 xl:w-2/4">
              <h3 className='font-bold text-2xl'>Mi progreso</h3>
              <p>Del 2 al 8 de enero:</p>
            </div>
            <div className='w-full justify-center flex flex-wrap xl:flex-nowrap gap-3'>
              <InfoCard />
              <InfoCard />
              <InfoCard />
            </div>
          </div>
        </div>
        <input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs m-5 rounded-lg" />
        <div className='grid gap-4 grid-auto-fit-sm md:grid-auto-fit-[20rem] w-full p-5'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
