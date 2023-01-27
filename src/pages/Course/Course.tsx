import Aside from './Aside/Aside';
import ClassExtras from './ClassExtras/ClassExtras';
import RelatedCourses from './RelatedCourses/RelatedCourses';

export default function Course() {
  return (
    <div className='flex justify-center md:px-2 md:gap-5 md:pt-5  '>
      <div className='max-w-5xl'>
        <video controls className='w-full rounded-t-lg'>
          <source src='src/assets/sample-video.mp4' type='video/mp4' />
        </video>
        <ClassExtras />
      </div>
      <div>
        <Aside />
        <RelatedCourses />
      </div>
    </div>
  );
}
