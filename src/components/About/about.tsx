import About1 from '../../assets/img/about-1.png';
import About2 from '../../assets/img/about-2.png';
import About3 from '../../assets/img/about-3.png';
import About4 from '../../assets/img/about-4.png';
import About5 from '../../assets/img/about-5.png';
import WhiteLogo from '../../assets/img/logo-white.svg';

interface Images {
  src: string;
}

export const About = () => {
  const images: Images[] = [{ src: About1 }, { src: About2 }, { src: About3 }, { src: About4 }, { src: About5 }];
  return (
    <div className='bg-white'>
      <div className='wrapper pt-[155px] md:pt-[46px] md:pb-[24px]'>
        <h2 className='bg-yellowOne text-white w-[816px] py-[15px] flex items-center justify-center gap-5 mx-auto mb-[55px] rounded-xl md:w-full md:py-[10px] md:gap-2 md:mb-[23px] md:rounded-md'>
          <span className='text-3xl font-bold md:text-[13px]'>私たち</span>
          <div>
            <img src={WhiteLogo} alt='' className='md:w-[148px]' />
          </div>
          <span className='text-3xl font-bold md:text-[13px]'>がサポートします</span>
        </h2>
        <div className='flex h-[290px] overflow-hidden md:h-[93px]'>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
