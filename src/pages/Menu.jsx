import Food from '../pages/Menu'

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

        <div className="bg-secondbg">
            <Food></Food>
        </div>
        </>
    )
}