import { SupportCard } from './supportCard';
import { supportData } from './supportData';

export const Support = () => {
  return (
    <section className='bg-[#F5F4F2] pt-[100px] pb-[180px] md:pt-[65px] md:pb-[115px]'>
      <h3 className='main-title'>Support</h3>
      <span className='sub-title'>サポート</span>
      <ul className='flex flex-col gap-[168px] mt-[100px] md:gap-[140px]'>
        {supportData.map((support, index) => (
          <SupportCard key={index} support={support} />
        ))}
      </ul>
    </section>
  );
};
