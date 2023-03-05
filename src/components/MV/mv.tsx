import MV_PC from '../../assets/img/mv.png';
import MV_SP from '../../assets/img/mv-sp.png';
import { useEffect, useState } from 'react';
export const MV = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const description = 'あらゆる「スポーツ」に関する課題に \n トータルソリューションを提供';

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div className='relative'>
      <div>
        <img src={width > 768 ? MV_PC : MV_SP} alt='mv' />
      </div>
      <div className='absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full text-white md:-translate-y-[50%]'>
        <h1 className='text-[60px] font-bold leading-none mb-[40px] md:text-[30px] md:mb-[38px]'>
          スポーツの夢の国を創る
        </h1>
        <p className='font-inter text-[24px] font-bold mb-[56px] whitespace-pre-wrap md:text-[16px] md:mb-12'>
          {description}
        </p>
        <a href='' className='w-[612px] btn-main md:w-[80%]'>
          お問い合わせ
        </a>
      </div>
    </div>
  );
};
