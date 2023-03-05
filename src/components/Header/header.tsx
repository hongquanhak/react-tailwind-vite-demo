import Logo from '../../assets/img/logo.svg';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full z-[999] top-0 left-0 bg-white pl-[68px] flex items-center justify-between md:py-2 md:px-4'>
      <a href='/' className='flex-shrink-0 z-1 p-[8px] md:w-[220px] py-1 px-0'>
        <img src={Logo} alt='logo' />
      </a>
      <div className='flex items-center md:hidden'>
        <button className='btn bg-black'>資料DL</button>
        <button className='btn bg-yellowOne'>お問い合わせ</button>
      </div>
      <div className='hidden md:block'>
        {isOpen ? (
          <MdOutlineClose size={'24px'} className='cursor-pointer' onClick={handleClick} />
        ) : (
          <HiOutlineMenu size={'24px'} className='cursor-pointer' onClick={handleClick} />
        )}
      </div>
    </div>
  );
};
