import WhiteLogo from '../../assets/img/logo-white.svg';
export const Footer = () => {
  const footerLinks = [
    { name: 'Support', link: '#' },
    { name: 'Reason', link: '#' },
    { name: 'Works', link: '#' },
    { name: 'News', link: '#' }
  ];
  return (
    <footer className='bg-[#141414]'>
      <div className='wrapper pt-[70px] pb-[16px]'>
        <ul className='flex items-center justify-center gap-10 mb-[70px]'>
          {footerLinks.map(({ name, link }) => (
            <li key={name} className='text-white font-inter'>
              <a
                href={link}
                className='relative block after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:scal-y-1 after:origin-top-left after:transition-transform after:ease-out after:duration-300 hover:opacity-60 hover:transition-all hover:duration-500 hover:ease-linear hover:after:scale-100'
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        <a href='' className='hover:opacity-60'>
          <img src={WhiteLogo} alt='logo' className='mx-auto' />
        </a>
        <p className='mt-[70px] text-center text-white'>Copyright©2021 Ascenders.inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
