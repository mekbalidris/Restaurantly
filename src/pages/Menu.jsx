import Food from "../sidecomponents/Food.jsx";

import chicken from "../assets/dishes/chicken.png"

export default function Menu(){

    return(
        <>
        <div className='bg-secondbg flex flex-col justify-center h-full w-full'>

        <div className="flex flex-row mt-8">
        <div className='pl-3 ml-105'>
        <div className='flex flex-row items-center'>
            <span className='text-gray-500'>MENU</span>
            <div className='bg-golden' style={{ width: "150px", height: "1px", margin: "0 10px" }} />
        </div>
            <div className='title text-10'>Check Our Tasty Menu</div>
        </div>
        </div>
        
        </div>

        <div className="bg-secondbg grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <Food 
          image={chicken}
          title="Chicken" 
          description="Lorem ipsum delicious chicken" 
          price="9.99" 
        />
        <Food 
          image={chicken} 
          title="Chicken" 
          description="Lorem ipsum delicious chicken" 
          price="9.99" 
        />
        <Food 
          image={chicken} 
          title="Chicken" 
          description="Lorem ipsum delicious chicken" 
          price="9.99" 
        />
        <Food 
          image={chicken}
          title="Chicken" 
          description="Lorem ipsum delicious chicken" 
          price="9.99" 
        />
      </div>
        </>
    )
}