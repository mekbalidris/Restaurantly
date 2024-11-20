import { useEffect, useState } from 'react';

export default function Nav(){

    const [ isScrolled, setIsScrolled ] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight){
            setIsScrolled(true);
        }else{
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return(
        <>
        <nav className={`transition-opacity ${isScrolled ? 'bg-black bg-opacity-100' : 'bg-black bg-opacity-50'}`}>  
        <div className="title">Restaurantly</div>
            <ul className="flex gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Specials</li>
                <li>Events</li>
                <li>Chefs</li>
                <li>Gallery</li>
                <li>Dropdown</li>
                <li>Contact</li>
            </ul>
            <div className="buttons hover:bg-opacity-100 hover:text-black">BOOK A TABLE</div>
        </nav>
        
        </>
    )
}