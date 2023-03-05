import classNames from 'classnames';
import { Support } from './supportData';

interface Props {
  support: Support;
}
export const SupportCard = (props: Props) => {
  const { support } = props;
  const { headerTitle, number, mainTitle, description, src, isDiff } = support;
  const classes = classNames('wrapper flex justify-between relative z-[1] md:flex-col md:gap-[24px]', {
    'flex-row-reverse md:flex-col-reverse': isDiff
  });
  const classesAbs = classNames(
    'w-[1000px] h-[365px] bg-white absolute -top-[50px] left-0 z-0 border border-solid border-yellowOne md:w-full md:h-[560px]',
    {
      'left-auto right-0': isDiff
    }
  );

  return (
    <li className='relative z-[1]'>
      <div className={classes}>
        <div className='w-[530px] md:w-full'>
          <p className='text-xl font-bold text-white bg-black rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-center py-[18px] mb-[20px] md:text-[14px] md:mb-2.5'>
            {headerTitle}
          </p>
          <h4 className='flex items-center gap-[30px] text-yellowOne mb-[20px] md:gap-4'>
            <span className='font-inter text-[70px] font-medium leading-[1.5] md:-mb-5'>{number}</span>
            <span className='text-[25px] font-bold leading-[1.4] md:text-[20px]'>{mainTitle}</span>
          </h4>
          <p className='whitespace-pre-wrap'>{description}</p>
        </div>
        <div className='w-[450px] md:w-full'>
          <img src={src} alt='' className='md:w-[335px] md:mx-auto' />
        </div>
      </div>
      <div className={classesAbs}></div>
    </li>
  );
};
