import { useState, useEffect } from 'react';

import about_bg from '../assets/bg/about_bg.jpg'

export default function About(){

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [responsiveAbout, setResponsiveAbout] = useState("0");

    useEffect(() => {
    const handleinnerwidth = () => {
      setInnerWidth(window.innerWidth);

      if(window.innerWidth < 510){
        setResponsiveAbout("230vh");
      }
      else if(window.innerWidth < 625){
        setResponsiveAbout("200vh");
      }else if(window.innerWidth < 1100){
        setResponsiveAbout("180vh");
      }
    }


    window.addEventListener('resize', handleinnerwidth);

    return () => {
      window.removeEventListener('resize', handleinnerwidth);
    }
  }, [])

    return(
        <>
        <div id="about">
        <div
        style={{
          backgroundImage: `url(${about_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: innerWidth > 1100 ? '100vh' : responsiveAbout,
          width: '100%',
          position: 'relative',
        }}
      >
        {/*overlay for the background*/}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: `rgba(0, 0, 0, 0.85)`,
            zIndex: 1,
          }}
        />
        <div>
        <div className='flex flex-wrap-reverse justify-center items-center h-full gap-2 flex-row'>
          <div className='flex w-full p-7 flex-col justify-center items-center text-left z-10 lg:w-1/2'>
            <h2 className='mt-20 text-left w-full'>Culpa cupidatat occaecat</h2>
            <p className='mt-3'>Sint minim anim eu voluptate in ut id tempor est aute in do quis minim. Ad velit aliqua occaecat commodo est commodo eiusmod sunt.</p>
            <p className='p1 mt-8'>&#10004; Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className='p1'>&#10004; Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            <p className='p1'>&#10004; Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore
            eu fugiat nulla pariatur.</p>
            <p className='p1 mt-8'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          </div>

          <div 
            className='sideimage'
            style={{
            marginTop: '6rem',
            backgroundImage: `url(${about_bg})`,
            backgroundSize: 'cover',
            zIndex: '10',
        }}>

          </div>
        </div>
        </div>
        </div>
        </div>
        <div className='h-3/6 bg-[#0C0B09] p-8'>
        
        </div>
        </>
    )
}