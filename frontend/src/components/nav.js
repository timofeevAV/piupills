'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// images
import Image from "next/image";
import piuImg from '../../public/images/piu.svg';
import pillsImg from '../../public/images/pills.svg';
// components
import { BurgerBtn } from './buttons/burgerBtn';

const Nav = React.memo(({ navLinks }) => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTransitionTimerRef = useRef(null);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('scroll-lock');

    clearTimeout(menuTransitionTimerRef.current ?? undefined);
    document.body.classList.add('menu-transition');

    menuTransitionTimerRef.current = setTimeout(() => {
      document.body.classList.remove('menu-transition');
    }, 500);
  };

  const handleScroll = () => {
    const piupillsLogo = document.getElementById('piupills-logo');
    setIsSticky(piupillsLogo?.getBoundingClientRect().bottom <= 0);
  };

  const handleResize = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('scroll-lock');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('scroll-lock');
    };
  }, []);

  return (
    <header className={`flex justify-between 
                        items-center h-[65px] w-full 
                        backdrop-blur-none md:backdrop-blur-md px-5
                        ${isSticky ? 'mix-blend-difference md:fixed md:top-0' : 'md:absolute md:bottom-0 md:top-auto'}
                        fixed top-0 select-none`}>
      <div className='nav-container-mobile w-full
                      fixed md:static 
                      left-0 md:left-auto
                      top-0 md:top-auto 
                      h-[100vh] md:h-auto'>
        <nav className='flex   
                        flex-col md:flex-row 
                        justify-around md:justify-between 
                        items-end md:items-center  
                        h-[100vh] md:h-auto  
                        py-[65px] md:py-0
                        px-[20px] md:px-0'>
          {
            navLinks.map((item, id) => (
              <Link href={item.href} 
                    key={id}
                    className={`nav-link text-right ${pathname === item.href ? 'active' : ''}`}
                    style={{ '--index': id }}>
                {item.title}
              </Link>
            ))
          }
        </nav>
      </div>
      <div id='piupills-logo-mobile'
           className="block md:hidden select-none pointer-events-none h-[35px]">
        <Image src={piuImg} alt="piu"
               className="w-full max-h-[50%]"
               loading="lazy" />
        <Image src={pillsImg} alt="pills"
               className="w-full max-h-[50%]"
               loading="lazy" />
      </div>
      <Suspense>
        <BurgerBtn externalHandler={handleMenu} isOpen={isMenuOpen}/>
      </Suspense>
    </header>
  );
});

Nav.displayName = 'Nav';
export { Nav };