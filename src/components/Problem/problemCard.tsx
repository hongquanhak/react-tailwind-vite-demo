import { Problem } from './problemData';

interface Props {
  problem: Problem;
}
export const ProblemCard = (props: Props) => {
  const { problem } = props;
  const { description, src } = problem;
  return (
    <li className='h-[250px] bg-white rounded-tl-[40px] rounded-tr-[40px] rounded-br-[40px] relative mb-[130px] shadow-md whitespace-pre-wrap md:w-full md:h-[180px] md:mb-[60px]'>
      <p className='text-[20px] font-bold leading-[1.7] absolute w-full top-[30%] left-1/2 -translate-x-1/2 text-center md:top-[50%] md:-translate-x-1/2 md:-translate-y-1/2'>
        {description}
      </p>
      <div className='absolute left-1 -bottom-1/2 -translate-y-1/2'>
        <img src={src} alt='' className='md:w-[120px]' />
      </div>
    </li>
  );
};
