import fire from "../assets/videos/fire.mp4";

export default function UnderNav(){

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
        
        <div className='relative flex gap-6 flex-col w-80 p-6 bg-secondbg justify-center overflow-hidden group lg1:h-70 lg1:w-17'>   
        <video className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100' autoPlay muted loop>  
        <source src={fire} type='video/mp4' />  
            Your browser does not support the video tag.  
          </video>  
          <div className='relative z-10 subtitle text-golden font-poppins'>01</div>  
          <div className='relative z-10 subtitle text-white'>this is a subtitle</div>  
          <div className='relative z-10'>  
            <p className='duration-500 group-hover:text-white'>Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.</p>  
          </div>  
        </div>  
      
        <div className='relative flex gap-6 flex-col w-80 p-6 bg-secondbg justify-center overflow-hidden group lg1:h-70 lg1:w-17'>   
        <video className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100' autoPlay muted loop>  
        <source src={fire} type='video/mp4' />  
            Your browser does not support the video tag.  
          </video>  
          <div className='relative z-10 subtitle text-golden font-poppins'>02</div>  
          <div className='relative z-10 subtitle text-white'>this is a subtitle</div>  
          <div className='relative z-10'>  
            <p className='duration-500 group-hover:text-white'>Ea nostrud cillum fugiat cillum amet esse eu. Eu aute dolor duis dolore exercitation irure dolore aliquip.</p>  
          </div>  
        </div>  
      
        <div className='relative flex gap-6 flex-col w-80 p-6 bg-secondbg justify-center overflow-hidden group lg1:h-70 lg1:w-17'>   
        <video className='absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100' autoPlay muted loop>  
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