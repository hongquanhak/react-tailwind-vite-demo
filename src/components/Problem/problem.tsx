import { ProblemCard } from './problemCard';
import { problemData } from './problemData';

export const Problem = () => {
  return (
    <div className='bg-grayOne'>
      <div className='wrapper pt-[83px] pb-[35px] relative md:pt-[60px] md:pb-2.5'>
        <span
          className='absolute left-0 right-0 -bottom-[30px] mx-auto w-0 h-0 border-t-[60px] border-solid border-t-grayOne border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent'
          aria-hidden='true'
        ></span>
        <h2 className='title-under'>こんな課題はありませんか？</h2>
        <ul className='grid grid-cols-3 gap-x-[13px] [&>*:nth-child(2)]:mt-8 [&>*:nth-child(5)]:mt-8 md:grid-cols-1 md:gap-[30px] md:[&>*:nth-child(2)]:mt-0 md:[&>*:nth-child(5)]:mt-0'>
          {problemData.map((problem, index) => (
            <ProblemCard key={index} problem={problem} />
          ))}
        </ul>
      </div>
    </div>
  );
};
