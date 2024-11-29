import fire from "../assets/videos/fire.mp4";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function UnderAbout(){

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return(
        <>
        <div className='bg-mainbg p-1 flex flex-col justify-center pb-8 h-full w-full'>

        <div className="flex flex-row mt-8">
        <div className='pl-3 ml-105'>
        <div className='flex flex-row items-center'>
            <span className='text-gray-500'>WHY US</span>
            <div className='bg-golden' style={{ width: "150px", height: "1px", margin: "0 10px" }} />
        </div>
            <div className='title text-10'>Why Choose Our Restaurant</div>
        </div>
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap gap-4 mt-12 w-full lg1:gap-2">  
        
        <div className='cardabout group' data-aos="fade-up">   
        <video className='firevideo group' autoPlay muted loop>  
        <source src={fire} type='video/mp4' />  
            Your browser does not support the video tag.  
          </video>  
          <div className='relative z-10 subtitle text-golden font-poppins'>01</div>  
          <div className='relative z-10 subtitle text-white'>this is a subtitle</div>  
          <div className='relative z-10'>  
            <p className='duration-500 group-hover:text-white'>Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.</p>  
          </div>  
        </div>  
      
        <div className='cardabout group' data-aos="fade-up" data-aos-delay="300">   
        <video className='firevideo group' autoPlay muted loop>  
        <source src={fire} type='video/mp4' />  
            Your browser does not support the video tag.  
          </video>  
          <div className='relative z-10 subtitle text-golden font-poppins'>02</div>  
          <div className='relative z-10 subtitle text-white'>this is a subtitle</div>  
          <div className='relative z-10'>  
            <p className='duration-500 group-hover:text-white'>Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.</p>  
          </div>  
        </div>  
      
        <div className='cardabout group' data-aos="fade-up" data-aos-delay="600">   
        <video className='firevideo group' autoPlay muted loop>  
        <source src={fire} type='video/mp4' />  
            Your browser does not support the video tag.  
          </video>  
          <div className='relative z-10 subtitle text-golden font-poppins'>03</div>  
          <div className='relative z-10 subtitle text-white'>this is a subtitle</div>  
          <div className='relative z-10'>  
            <p className='duration-500 group-hover:text-white'>Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.</p>  
          </div>  
        </div> 

      </div>
        
        </div>
        </>
    )
}